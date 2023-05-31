import '../pages/index.css';
import Card from '../script/components/Card.js'
// import {initialCards as cardList} from '../script/utils/constants.js';
import FormValidator from '../script/components/FormValidator.js';
import PopupWithImage from '../script/components/PopupWithImage.js';
import Section from '../script/components/Section.js';
import PopupWithForm from '../script/components/PopupWithForm.js';
import UserInfo from '../script/components/UserInfo.js';
import PopupDeleteCard from '../script/components/PopupDeletedCard';
import Api from '../script/components/Api';
import{
  settings,
  entityProfile,
  allForms,
  popupImageSelector,
  popupEditSelector,
  popupAddCardSelector,
  popupChangeAvatarSelector,
  popupConfirmSelector,
  elementsArea,
  profileEditForm,
  formElementAdd,
  formElementChangeAvatar,
  formElementConfirm,
  profileButtonEdit,
  buttonAddElement,
  buttonChangeAvatar,
  avatarElementImage
} from '../script/utils/constants.js'

const userInfo = new UserInfo(entityProfile)
const popupImageFull = new PopupWithImage(popupImageSelector)
popupImageFull.setEventListeners();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '79415f43-69bf-4f12-9e19-e6ac068a71ff',
    'Content-Type': 'application/json'
  }
});

const popupConfirmDelete = new PopupDeleteCard(popupConfirmSelector, ({card, cardId}) => {
  api.deleteCard(cardId)
  .then(() => {
    card.removeCard()
    popupConfirmDelete.close()
  })
  .catch((error => console.error(`Ошибка при удалении карточки ${error}`)))
  .finally(() => popupConfirmDelete.setupDefaultButtonText())
  })
popupConfirmDelete.setEventListeners();

function generateNewCard (item){
  const card = new Card(item, '#element-template', popupImageFull.open, popupConfirmDelete.open, (LikeButton , cardId) => {
    if (LikeButton.classList.contains('element__like_active')){
      api.deleteLike(cardId)
      .then(res => { 
        card.isLiked(res.likes);
      })
      .catch((error => console.error(`Ошибка при добавлении лайка, подумай прежде чем поставить ${error}`)))
    } else {
      api.getLike(cardId)
      .then(res => {
        card.isLiked(res.likes)
      })
      .catch((error => console.error(`Ошибка при удалении лайка и твой бывший увидит его ${error}`)))
    }
  });//
  return card.generateCard();
}

const sectionListContainer = '.elements';
const sectionList = new Section((item) => 
{sectionList.addItemAppend(generateNewCard(item))
}, sectionListContainer);

const popupProfile = new PopupWithForm(popupEditSelector, (data) => {
  api.setUserInfo(data)
  .then(res  => {
    userInfo.setUserInfo({username: res.name, profession: res.about, avatar: res.avatar})
    popupProfile.close()
  })
  .catch((error => console.error(`Ошибка при редактировании профиля ${error}`)))
  .finally(() => popupProfile.setupDefaultButtonText())
})
popupProfile.setEventListeners()

const popupCard = new PopupWithForm(popupAddCardSelector, (data) =>{
  Promise.all([api.getInfo(), api.getNewCard(data)])
  .then(([dataUser, dataCard]) => {
    dataCard.myid = dataUser._id
    sectionList.addItemPrepend(generateNewCard(dataCard))
    popupCard.close()
  })
  .catch((error => console.error(`Ошибка при создании новой карточки ${error}`)))
  .finally(() => popupCard.setupDefaultButtonText())
})
popupCard.setEventListeners()

const popupAvatarImage = new PopupWithForm (popupChangeAvatarSelector, (data) =>{
   api.getNewAvatar(data)
   .then(res =>{
    userInfo.setUserInfo({username: res.name, profession: res.about, avatar: res.avatar})
    popupAvatarImage.close()
   })
   .catch((error => console.error(`Ошибка при редактировании аватара ${error}`)))
   .finally(() => popupAvatarImage.setupDefaultButtonText())
});
popupAvatarImage.setEventListeners();

Array.from(document.forms).forEach(formElement =>{
  const form = new FormValidator(settings, formElement);
  const name = formElement.getAttribute('name');
  allForms[name] = form;
  form.enableValidation();
})

buttonAddElement.addEventListener('click', () => {
  allForms.formCard.resetPopupError() 
  popupCard.open()
}) 

profileButtonEdit.addEventListener('click', () => {
  allForms.formProfile.resetPopupError();
  popupProfile.setInputsValue(userInfo.getUserInfo())
  popupProfile.open()
})

buttonChangeAvatar.addEventListener('click', () => {
  allForms.formAvatar.resetPopupError();
  popupAvatarImage.open();
})

Promise.all([api.getInfo(), api.getCards()])
 .then(([dataUser,dataCard]) =>{
  // console.log(dataCard)
  dataCard.forEach(element => element.myid = dataUser._id)
  userInfo.setUserInfo(({username: dataUser.name, profession: dataUser.about, avatar: dataUser.avatar}))
  sectionList.addCardFromList(dataCard)
 })
 .catch((error => console.error(`Ошибка при загрузки данных страницы ${error}`)))