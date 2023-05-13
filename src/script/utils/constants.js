export const initialCards = [
  {
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
]; 

const settings = {
    formSelector: '.popup__form',// формы
    inputSelector: '.popup__text',// инпуты
    submitButtonSelector: '.popup__submit-btn', // кнопки
    errorClass: 'popup__error_active', // это span
    inputErrorClass: 'popup__text_error', // это красная черта unput
    inactiveButtonClass: 'popup__submit-btn_disabled',// button disabled
};//ключи 

const entityProfile = {
  profileNameSelector: '.profile__info-name',
  profileJobSelector: '.profile__info-job'
}

const popupImageSelector = '.popup_type_image'
const popupEditSelector = '.popup_type_edit'
const popupAddCardSelector = '.popup_type_add'
const elementsArea = document.querySelector('.elements');
const profileEditForm = document.querySelector('#form_type_profile'); 
const formElementAdd = document.querySelector('#form_type_add');
const profileButtonEdit = document.querySelector('.profile__button-edit'); 
const buttonAddElement = document.querySelector('.profile__button-add');

export{
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
}

// const arhizImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg', import.meta.url);
// const chelyabickImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg', import.meta.url);
// const ivanovoImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg', import.meta.url)
// const kamchatkaImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg', import.meta.url);
// const kholmogorskyImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg', import.meta.url);
// const baikalImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg', import.meta.url)

// export const initialCards = [
//   {
//     title: 'Архыз',
//     link: arhizImage,
//   },
//   {
//     title: 'Челябинская область',
//     link: chelyabickImage,
//   },
//   {
//     title: 'Иваново',
//     link: ivanovoImage,
//   },
//   {
//     title: 'Камчатка',
//     link: kamchatkaImage,
//   },
//   {
//     title: 'Холмогорский район',
//     link: kholmogorskyImage,
//   },
//   {
//     title: 'Байкал',
//     link: baikalImage,
//   },
// ];