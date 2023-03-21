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
const elementsArea = document.querySelector('.elements');  
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
 
initialCards.forEach(object => { 
  elementsArea.append(createElement(object.name, object.link)) 
}); 
 
function createElement (title, link){ 
  const element = document.querySelector('#element-template').cloneNode(true).content; 
  const newElement = element.cloneNode(true); 
    const elementImage = element.querySelector('.element__image'); 
    const elementTitle = element.querySelector('.element__title'); 
    elementImage.src = link; 
    elementImage.alt = title; 
    elementTitle.textContent = title; 
 
  return element; 
} 
// // all popups open/close 
function showPopup(popupElement){  
  popupElement.classList.add('popup_opened');  
  addOverlayListeners(popupElement);
}  
function hidePopup(popupElement){ 
  popupElement.classList.remove('popup_opened');
  removeOverlayListeners(popupElement);  
} 
// //all popups open/close 

function showImageFullViewPopup (){  
  showPopup(popupFullView);  
}  
function hideImageFullViewPopup (){  
  hidePopup(popupFullView);  
}  
 
//profile 
function showEditProfilePopup (){  
  showPopup(popupEditProfile);  
}  
 
function hideEditProfilePopup (){ 
  hidePopup(popupEditProfile) 
} 
 
addElementButton.addEventListener('click', showEditElementPopup) 
 
profileButtonEdit.addEventListener('click', () => { 
  nameInput.value = profileInfoName.textContent;  
  jobInput.value = profileInfoJob.textContent; 
  showPopup (popupEditProfile); 
}); 
 
function saveProfileData (event){  
  event.preventDefault()    
  profileInfoName.textContent = nameInput.value;  
  profileInfoJob.textContent = jobInput.value;  
  hidePopup(popupEditProfile);  
}  
  
////profile 
 
///add card 
function showEditElementPopup (){  
  showPopup(popupAddElement);  
}  
function hideEditElementPopup (){  
  hidePopup(popupAddElement);  
}  
popupAddElement.addEventListener('click', showEditProfilePopup) 
popupAddElement.addEventListener('click', hideEditProfilePopup) 
 
function addNewElement (event) { 
  event.preventDefault() 
  elementsArea.prepend(createElement(addImageTitle.value, addImageLink.value)) 
  addImageTitle.value = ''; 
  addImageLink.value = ''; 
  hidePopup(popupAddElement) 
} 
// открываем картинку для просмотра 
function openFullViewImage (card){ 
  const imageSrc = card.querySelector('.element__image').getAttribute('src') 
  const name = card.querySelector('.element__title').textContent 
  popupImageCard.setAttribute('src', imageSrc) 
  popupImageCard.setAttribute('alt', name) 
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
function clickLike(event){ 
  event.target.classList.toggle('element__like_active'); 
} 
 
elementsArea.addEventListener('click', function(event){ 
  if(event.target.classList.contains('element__image')){ 
    const card = event.target.closest('.element');  
    openFullViewImage (card) 
  } 
 
  if (event.target.classList.contains('element__trash')){ 
    removeElement(event) 
  } 
 
  if(event.target.classList.contains('element__like')){ 
    clickLike(event) 
  } 
}); 
// удаление и лайк 
 
popupEditProfile.addEventListener('submit', saveProfileData); 
formElementAdd.addEventListener("submit", addNewElement); 

//добавляет слушатели событий для закрытия всплывающего окна  
function addOverlayListeners (popupElement){
    document.addEventListener('keydown', escapeFromPopup)
    popupElement.addEventListener('mousedown', closeOnOverlayClick)
}
// удаления слушателей событий 
function removeOverlayListeners (popupElement) {
    popupElement.removeEventListener('mousedown', closeOnOverlayClick)
    document.removeEventListener('keydown', escapeFromPopup)
}
// проверяет клик вне сплывающего окна
function closeOnOverlayClick(event) {
  const popup = event.target.closest('.popup_opened');
  if (!popup) {
    const openedPopup = document.querySelector('.popup_opened');
    removeOverlayListeners(openedPopup);
    openedPopup.classList.remove('popup_opened');
  }
}

// проверяет нажатие на клавишу esc
function escapeFromPopup(event) {
    if (event.key === 'Escape') {
      const showPopup = document.querySelector('.popup_opened');
      removeOverlayListeners(showPopup);
      hidePopup(showPopup);
    }
}

// function closeOnOverlayClick(event) {
//     const popupElement = event.target.closest('.popup_opened');
//     if (!popupElement) {
//       const openedPopup = document.querySelector('.popup_opened');
//       removeOverlayListeners(openedPopup);
//       openedPopup.classList.remove('.popup_opened');
//     }
// }
