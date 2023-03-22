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
const ButtonAddElement = document.querySelector('.profile__button-add'); //! 
const formElementAdd = document.querySelector('#form_type_add');//! 
const cardTemplate = document.querySelector('#element-template').content.querySelector('.element');//NEW
//button and input 
const popupCloseAddElement = popupAddElement.querySelector('.popup__close_type_add'); 
const titleAddImage = popupAddElement.querySelector('.popup__text_type_title'); 
const linkAddImage = popupAddElement.querySelector('.popup__text_type_link'); 
 
// 3  Переменные для открытия карточки  
const popupFullView = document.querySelector('.popup_type_image'); 
//button 
const popupCloseFullImageView = popupFullView.querySelector('.popup__close_type_image'); 
const popupImageCard = popupFullView.querySelector('.popup__image-card'); 
const popupImageName = popupFullView.querySelector('.popup__image-name'); 

//NEW-> Вынесены селекторы в отдельные константы
const elementTitleSelector = '.element__title';
const elementImageSelector = '.element__image';
const elementTrashSelector = '.element__trash';
const elementLikeSelector = '.element__like';
//NEW<-

initialCards.forEach(object => { 
  elementsArea.append(createElement(object.name, object.link)) 
}); 
 
function createElement (title, link){
  const element = cardTemplate.cloneNode(true);
  const elementImage = element.querySelector(elementImageSelector);
  const elementTitle = element.querySelector(elementTitleSelector);
  const elementTrash = element.querySelector(elementTrashSelector);
  const elementLike = element.querySelector(elementLikeSelector);

  elementImage.src = link;
  elementImage.alt = title;
  elementTitle.textContent = title;

  elementImage.addEventListener('click', function(event) {
    openFullViewImage(element);
  });

  elementTrash.addEventListener('click', function(event) {
    removeElement(element);
  });

  elementLike.addEventListener('click', function(event) {
    clickLike(element);
  });

  return element;
}

    // elementsArea.addEventListener('click', function(event){ 
    //     if(event.target.classList.contains('element__image')){  
    //       openFullViewImage ('.element') 
    //     } 
       
    //     element.querySelector(elementTrashSelector).addEventListener('click', function(event) {
    //       removeElement(event);
    //     });
      
    //     element.querySelector(elementLikeSelector).addEventListener('click', function(event) {
    //       clickLike(event);
    //     });
    //   }); 
 // удаление и лайк

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
 
ButtonAddElement.addEventListener('click', showEditElementPopup) 
 
profileButtonEdit.addEventListener('click', () => { 
  nameInput.value = profileInfoName.textContent;  
  jobInput.value = profileInfoJob.textContent; 
  showPopup (popupEditProfile); 
  resetPopupError (popupEditProfile, settings);
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
  resetPopupError(popupAddElement, settings);  
}  
function hideEditElementPopup (){  
  hidePopup(popupAddElement);  
}  
// popupAddElement.addEventListener('click', showEditProfilePopup) 
// popupAddElement.addEventListener('click', hideEditProfilePopup) 

//вместо них NEW -->
function toggleEditProfilePopup() {
  showPopup(popupAddElement);
  resetPopupError(popupAddElement, settings);

  function closePopup() {
    hidePopup(popupAddElement);
    popupAddElement.removeEventListener('click', closePopup);
  }

  popupAddElement.addEventListener('click', closePopup);
}
//<--
 
function addNewElement (event) { 
  event.preventDefault() 
  elementsArea.prepend(createElement(titleAddImage.value, linkAddImage.value)) 
  titleAddImage.value = ''; 
  linkAddImage.value = ''; 
  hidePopup(popupAddElement) 
} 
// открываем картинку для просмотра 
// function openFullViewImage (element){ 
//   const imageSrc = element.querySelector(elementImageSelector).getAttribute('src')
//   const name = element.querySelector(elementTitleSelector).textContent
//   popupImageCard.setAttribute('src', imageSrc)
//   popupImageCard.setAttribute('alt', name)
//   popupImageName.textContent = name
//   showImageFullViewPopup ();
// } 
function openFullViewImage (element){
  const imageSrc = element.querySelector(elementImageSelector).getAttribute('src')
  const name = element.querySelector(elementTitleSelector).textContent

  popupImageCard.setAttribute('src', imageSrc)
  popupImageCard.setAttribute('alt', name)
  popupImageName.textContent = name
  showImageFullViewPopup ();
}
 
popupCloseProfile.addEventListener('click',hideEditProfilePopup) 
popupCloseAddElement.addEventListener('click',hideEditElementPopup) 
popupCloseFullImageView.addEventListener('click', hideImageFullViewPopup) 
 
// удаление и лайк 
function removeElement(element) {
  element.remove();
}

function clickLike(element){
  element.querySelector(elementLikeSelector).classList.toggle('element__like_active');
}
 
// elementsArea.addEventListener('click', function(event){ 
//   if(event.target.classList.contains('element__image')){ 
//     const card = event.target.closest('.element');  
//     openFullViewImage (card) 
//   } 
 
//   if (event.target.classList.contains('element__trash')){ 
//     removeElement(event) 
//   } 
 
//   if(event.target.classList.contains('element__like')){ 
//     clickLike(event) 
//   } 
// }); 
// удаление и лайк 
 
popupEditProfile.addEventListener('submit', saveProfileData); 
formElementAdd.addEventListener('submit', addNewElement); 

//вариант 2 
//если клик был по затемненной области
// закрытие попапа при клике на оверлей
const onOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    hidePopup(event.target);
  }
};

// закрытие попапа при нажатии на клавишу Escape
const onEscapePress = (event) => {
  if (event.key === 'Escape') {
    const popupElement = document.querySelector('.popup_opened')
    hidePopup(popupElement);
  }
};

// const onOverlayClick = (event) => {
//   if (event.target === event.currentTarget) { 
//     const popupElement = document.querySelector('.popup_opened')  
//     hidePopup(popupElement)
//   }
// }
// //если была нажата клавиша "Esc"
// const onEscapePress = (event) => {
//   if (event.key === 'Escape') { 
//     const popupElement = document.querySelector('.popup_opened') 
//     hidePopup(popupElement)
//   }
// }

const showPopup = (popupElement) => {
  popupElement.classList.add('popup_opened')

  popupElement.addEventListener('keydown', onOverlayClick)

  document.addEventListener('keydown', onEscapePress)
}

const hidePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened')

  popupElement.removeEventListener('keydown', onOverlayClick)

  document.removeEventListener('keydown', onEscapePress)
}
