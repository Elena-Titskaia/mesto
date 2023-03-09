
//5

// 1 // Переменные для профиля 
const popupEditProfile = document.querySelector('.popup_type_edit');// это попап профиля
const profileButtonEdit = document.querySelector('.profile__button-edit');//кнопка открытия
const profileEditForm = document.querySelector('#form');// это для профиля
const profileInfoName = document.querySelector('.profile__info-name'); // текстовый эл-т
const profileInfoJob = document.querySelector('.profile__info-job'); // текстовый эл-т
//button and input
const popupCloseProfile = popupEditProfile.querySelector('.popup__close');// кнопка закрытия
const nameInput = popupEditProfile.querySelector('.popup__text_type_name'); // поле ввода имя
const jobInput = popupEditProfile.querySelector('.popup__text_type_job'); // поле ввода работы

// 2 // Переменные для добавления карточек
const elementArea = document.querySelector('.elements'); // контейнер, куда добавляем элементы
const popupAddElement = document.querySelector('.popup_type_add');
const addElementButton = document.querySelector('.profile__button-add'); //кнопка открытия для карточки
const formElementAdd = document.querySelector('#form_type_add');
//button and input
const popupCloseAddElement = popupAddElement.querySelector('.popup__close_type_add');
const addImageInput = popupAddElement.querySelector('.popup__text_type_link');
const addTitleInput = popupAddElement.querySelector('.popup__text_type_title');

// 3 // Переменные для открытия карточки 
const popupFullView = document.querySelector('.popup_type_image');
//button
const popupCloseFullImageView = popupFullView.querySelector('.popup__close_type_image');
const popupImageCard = popupFullView.querySelector('.popup__image_card');
const popupImageName = popupFullView.querySelector('.popup__image_name');



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
]; // массив готовых карточек
// его надо добавить в ДОМ
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
  popup.classList.add('popup_opened'); 
} 
function hidepopup(popupElement){
  popup.classList.remove('popup_opened'); 
}
// all popups open/close


function showImageFullViewPopup (){ 
  popup.classList.add(popupFullView); 
} 
function hideImageFullViewPopup (){ 
  popup.classList.remove(popupFullView); 
} 

//profile
function showEditProfilePopup (){ 
  popup.classList.add(popupEditProfile); 
} 

function hideEditProfilePopup{
  hidepopup(popupEditProfile)
}
profileButtonEdit.addEventListener('click', showEditProfilePopup)
profileButtonEdit.addEventListener('click', hideEditProfilePopup)

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
  popup.classList.add(popupAddElement); 
} 
function hideEditElementPopup (){ 
  popup.classList.remove(popupAddElement); 
} 
popupAddElement.addEventListener('click', showEditProfilePopup)
popupAddElement.addEventListener('click', hideEditProfilePopup)

function addNewElement (event) {
  event.preventDefault()
}











 







