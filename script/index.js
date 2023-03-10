
// 1 Переменные для профиля 
const popupEditProfile = document.querySelector('.popup_type_edit');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const profileEditForm = document.querySelector('#form');
const profileInfoName = document.querySelector('.profile__info-name'); 
const profileInfoJob = document.querySelector('.profile__info-job'); 
//button and input
const popupCloseProfile = popupEditProfile.querySelector('.popup__close');
const nameInput = popupEditProfile.querySelector('.popup__text_type_name'); 
const jobInput = popupEditProfile.querySelector('.popup__text_type_job'); 

// 2  Переменные для добавления карточек
const elementArea = document.querySelector('.elements'); 
const popupAddElement = document.querySelector('.popup_type_add'); //!
const addElementButton = document.querySelector('.profile__button-add'); //!
const formElementAdd = document.querySelector('#form_type_add');//!
//button and input
const popupCloseAddElement = popupAddElement.querySelector('.popup__close_type_add');
const addImageTitle = popupAddElement.querySelector('.popup__text_type_title');
const addImageLink = popupAddElement.querySelector('.popup__text_type_link');

// 3  Переменные для открытия карточки 
const popupFullView = document.querySelector('.popup_type_image');
//button
const popupCloseFullImageView = popupFullView.querySelector('.popup__close_type_image');
const popupImageCard = popupFullView.querySelector('.popup__image-card');
const popupImageName = popupFullView.querySelector('.popup__image-name');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
]; 

initialCards.forEach(object => {
  elementArea.append(createElement(object.name, object.link))
});

function createElement (title, link){
  const element = document.querySelector('#element-template').cloneNode(true).content;
  const newElement = element.cloneNode(true);
    const elementImage = element.querySelector('.element__image');
    const elementTitle = element.querySelector('.element__title');
    elementImage.src = link;
    elementTitle.textContent = title;

  return element;
}
// all popups open/close
function showpopup(popupElement){ 
  popupElement.classList.add('popup_opened'); 
} 
function hidepopup(popupElement){
  popupElement.classList.remove('popup_opened'); 
}
// all popups open/close


function showImageFullViewPopup (){ 
  showpopup(popupFullView); 
} 
function hideImageFullViewPopup (){ 
  hidepopup(popupFullView); 
} 

//profile
function showEditProfilePopup (){ 
  showpopup(popupEditProfile); 
} 

function hideEditProfilePopup (){
  hidepopup(popupEditProfile)
}
profileButtonEdit.addEventListener('click', showEditProfilePopup)
addElementButton.addEventListener('click', showEditElementPopup)

profileButtonEdit.addEventListener('click', () => {
  nameInput.value = profileInfoName.textContent; 
  jobInput.value = profileInfoJob.textContent;
  showpopup (popupEditProfile);
});

function saveChangeAttributeValue (event){ 
  event.preventDefault()   
  profileInfoName.textContent = nameInput.value; 
  profileInfoJob.textContent = jobInput.value; 
  hidepopup(popupEditProfile); 
} 
form.addEventListener('submit', saveChangeAttributeValue); 
////profile

///add card
function showEditElementPopup (){ 
  showpopup(popupAddElement); 
} 
function hideEditElementPopup (){ 
  hidepopup(popupAddElement); 
} 
popupAddElement.addEventListener('click', showEditProfilePopup)
popupAddElement.addEventListener('click', hideEditProfilePopup)

function addNewElement (event) {
  event.preventDefault()
  elementArea.prepend(createElement(addImageTitle.value, addImageLink.value))
  addImageTitle.value = '';
  addImageLink.value = '';
  hidepopup(popupAddElement)
}
// открываем картинку для просмотра
function openFullViewImage (card){
  const imageSrc = card.querySelector('.element__image').getAttribute('src')
  const name = card.querySelector('.element__title').textContent
  popupImageCard.setAttribute('src', imageSrc)
  popupImageName.textContent = name
  showImageFullViewPopup ();
}

popupCloseProfile.addEventListener('click',hideEditProfilePopup)
popupCloseAddElement.addEventListener('click',hideEditElementPopup)
popupCloseFullImageView.addEventListener('click', hideImageFullViewPopup)

// удаление и лайк
function removeElement(event) {
  event.target.closest('.element').remove();
}
function selectLike(event){
  event.target.classList.toggle('element__like_active');
}

elementArea.addEventListener('click', function(event){
  if(event.target.classList.contains('element__image')){
    const card = event.target.closest('.element'); 
    openFullViewImage (card)
  }

  if (event.target.classList.contains('element__trash')){
    removeElement(event)
  }

  if(event.target.classList.contains('element__like')){
    selectLike(event)
  }
});
// удаление и лайк


popupEditProfile.addEventListener('submit', saveChangeAttributeValue);
formElementAdd.addEventListener("submit", addNewElement);








 







