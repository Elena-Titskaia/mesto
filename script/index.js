import Card from './Card.js'
import {initialCards as cardList} from './constants.js'
import FormValidator from './FormValidator.js';
import { settings } from './constants.js';
//Сергей, добрый день! Спасибо за супер оперативную проверку работы и комментарии
// 1 Переменные для профиля  
const popupEditProfile = document.querySelector('.popup_type_edit'); 
const profileButtonEdit = document.querySelector('.profile__button-edit'); 
const profileEditForm = document.querySelector('#form_type_profile'); 
const profileValidator = new FormValidator(settings, profileEditForm);
const formElementAdd = document.querySelector('#form_type_add');
const cardAddValidator = new FormValidator(settings, formElementAdd);
[profileValidator, cardAddValidator].forEach((form)=>form.enableValidation())
const profileInfoName = document.querySelector('.profile__info-name');  
const profileInfoJob = document.querySelector('.profile__info-job');  
//button and input 
const nameInput = popupEditProfile.querySelector('.popup__text_type_name');  
const jobInput = popupEditProfile.querySelector('.popup__text_type_job');  
// 2  Переменные для добавления карточек 
const elementsArea = document.querySelector('.elements');  
const popupAddElement = document.querySelector('.popup_type_add'); //! 
const buttonAddElement = document.querySelector('.profile__button-add'); //! 
//button and input 
const titleAddImage = popupAddElement.querySelector('.popup__text_type_title'); 
const linkAddImage = popupAddElement.querySelector('.popup__text_type_link'); 
// 3  Переменные для открытия карточки  
const popupFullView = document.querySelector('.popup_type_image'); 
//button 
const popupImageCard = popupFullView.querySelector('.popup__image-card'); 
const popupImageName = popupFullView.querySelector('.popup__image-name'); 

function createElement (card){
  const newElement = new Card(card, '#element-template', showImageFullViewPopup)
  return newElement.generateCard()
}
 
popupEditProfile.addEventListener('submit', saveProfileData); 
formElementAdd.addEventListener('submit', addNewElement); 

function addNewElement (event) { 
  event.preventDefault() 
  const card = {name: titleAddImage.value, link: linkAddImage.value};
  elementsArea.prepend(createElement(card)); 
  hidePopup(popupAddElement) 
} 

cardList.forEach(object => { 
  elementsArea.append(createElement(object)) 
}); 

buttonAddElement.addEventListener('click', showEditElementPopup) 

function saveProfileData (event){  
  event.preventDefault()    
  profileInfoName.textContent = nameInput.value;  
  profileInfoJob.textContent = jobInput.value;  
  hidePopup(popupEditProfile);  
} 

function showEditElementPopup (){  
  showPopup(popupAddElement); 
  formElementAdd.reset()
  cardAddValidator.resetPopupError() 
}  
profileButtonEdit.addEventListener('click', showEditProfilePopup)

function showEditProfilePopup (){  
  showPopup(popupEditProfile); 
  nameInput.value = profileInfoName.textContent;  
  jobInput.value = profileInfoJob.textContent; 
  profileValidator.resetPopupError() 
}  

function showImageFullViewPopup (card){  
  popupImageCard.src = card.link;
  popupImageCard.alt = card.name;
  popupImageName.textContent = card.name;
  showPopup(popupFullView);  
}   

function onOverlayClickClose (event) {
  if (event.target === event.currentTarget){
    hidePopup(event.target);
  }
};

function onEscapePressClose (event) {
  if (event.key === "Escape") {  
    const popupElement = document.querySelector('.popup_opened')  
    hidePopup(popupElement) 
  } 
};

function showPopup (popupElement) {
  popupElement.classList.add('popup_opened')

  document.addEventListener("keydown", onEscapePressClose)
} 

function hidePopup (popup) { 
  popup.classList.remove("popup_opened") 
 
  document.removeEventListener("keydown", onEscapePressClose)
} 

const popupList = document.querySelectorAll('.popup');

popupList.forEach(popup =>{
  popup.addEventListener('mousedown', onOverlayClickClose)
})

const buttonClose = document.querySelectorAll('.popup__close');

buttonClose.forEach(button => button.addEventListener('click',() => {
  const popupElement = button.closest('.popup_opened')
  hidePopup(popupElement)
})); 

