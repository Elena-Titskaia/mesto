import '../pages/index.css';
import Card from '../script/components/Card.js'
import {initialCards as cardList} from '../script/utils/constants.js';
import FormValidator from '../script/components/FormValidator.js';
import PopupWithImage from '../script/components/PopupWithImage.js';
import Section from '../script/components/Section.js';
import PopupWithForm from '../script/components/PopupWithForm.js';
import UserInfo from '../script/components/UserInfo.js';
import{
  settings,
  entityProfile,
  popupEditSelector,
  popupAddCardSelector,
  popupImageSelector,
  elementsArea,
  profileEditForm,
  formElementAdd,
  profileButtonEdit,
  buttonAddElement
} from '../script/utils/constants.js'

console.log()

const popupImageFull = new PopupWithImage(popupImageSelector)
popupImageFull.setEventListeners();

const profileValidator = new FormValidator(settings, profileEditForm);

const sectionListContainer = '.elements';
const sectionList = new Section({
    items: cardList,
    renderer: (item) => {
        const card = new Card(item, '#element-template', popupImageFull.open);
        return card.generateCard();
        //sectionList.addItem(cardElement);
    }
}, sectionListContainer);
sectionList.addCardFromList();

const userInfo = new UserInfo(entityProfile)

const popupProfile = new PopupWithForm(popupEditSelector, (event) => {
  event.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputsValue())
  popupProfile.close();
})
popupProfile.setEventListeners()

const popupCard = new PopupWithForm(popupAddCardSelector, (event) =>{
  event.preventDefault();
  sectionList.addItem(sectionList.renderer(popupCard.getInputsValue()))
  popupCard.close();
})
popupCard.setEventListeners()

const cardAddValidator = new FormValidator(settings, formElementAdd);
[profileValidator, cardAddValidator].forEach((form)=>form.enableValidation())

buttonAddElement.addEventListener('click', () => {
  cardAddValidator.resetPopupError() 
  popupCard.open()
}) 

profileButtonEdit.addEventListener('click', () => {
  popupProfile.setInputsValue(userInfo.getUserInfo())
  profileValidator.resetPopupError();
  popupProfile.open()
})
