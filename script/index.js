
let page = document.querySelector('.page');
let content = document.querySelector('.content');
let popup = document.querySelector('.popup'); //модальное окно 
let popupEdit = document.querySelector('#form');// это для профиля



//5

const closeElementButton = document.querySelector('.popup__close_type_add');// крестик
const submitButtonElement = document.querySelector('.popup__submit-btn_type_add');
const popupElement = document.querySelector('.popup_type_add');

const elementArea = document.querySelector('.elements'); // контейнер, куда добавляем элементы
let elementImage = document.querySelector('.element__image');
let elementTitle = document.querySelector('.element__title');
let imageInput = document.querySelector('.popup__text_type_link');
let titleInput = document.querySelector('.popup__text_type_title');

// 1 // Переменные для профиля 
const popupEditProfile = document.querySelector('.popup_type_edit');// это попап профиля
const  profileButtonEdit = document.querySelector('.profile__button-edit');//кнопка открытия
const profileEditForm = document.querySelector('#form');// это для профиля
const profileInfoName = document.querySelector('.profile__info-name'); // текстовый эл-т
const profileInfoJob = document.querySelector('.profile__info-job'); // текстовый эл-т
//button and input
const  popupCloseProfile = popupEditProfile.querySelector('.popup__close');// кнопка закрытия
const nameInput = popupEditProfile.querySelector('.popup__text_type_name'); // поле ввода имя
const jobInput = popupEditProfile.querySelector('.popup__text_type_job'); // поле ввода работы

// 2 // Переменные для добавления карточек
const popupAddElement = document.querySelector('.popup_type_add');
const addElementButton = document.querySelector('.profile__button-add'); //кнопка открытия для карточки
const formElementAdd = document.querySelector('#form_type_add');
//button and input
const popupCloseAddElement = popupAddElement.querySelector('.popup__close_type_add');
const addImageInput = popupAddElement.querySelector('.popup__text_type_link');
const addTitleInput = popupAddElement.querySelector('.popup__text_type_title');

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

    //element.querySelector('.element__like')
    //element.addEventListener('click', function (event){
    //  event.target.classlist.toggle('elements__like_active');
    //});
  return element;
}



//тут только добавление новых карточек через нажатие на кнопку
function addElement(){
  addElementButton.addEventListener('click',function(event){
    event.elementArea.append(createElement(titleInput, imageInput));
  });
}

//тут лайк И ОН НЕ РАБОТАЕТ//
addLike()
function addLike(){
  likeButton.addEventListener('click',function(event){
    event.target.classList.toggle('.element__like_active');
  })
}


profileButtonAdd.addEventListener('click', () => {
  addElement(titleInput.value, imageInput.value);
  titleInput.value = '';
  imageInput.value = '';
  closePopup('.');
});

 
function showpopup(){ 
  popup.classList.add('popup_opened'); 
} 

profileButtonEdit.addEventListener('click', showpopup)
addElementButton.addEventListener('click', showpopup)

profileButtonEdit.addEventListener('click', () => {
  nameInput.value = profileInfoName.textContent; 
  jobInput.value = profileInfoJob.textContent;
  showpopup (popupEdit);
});


function saveChangeAttributeValue (event){ 
  event.preventDefault()   
  profileInfoName.textContent = nameInput.value; 
  profileInfoJob.textContent = jobInput.value; 
  hidepopup(); 
} 
form.addEventListener('submit', saveChangeAttributeValue); 




// 1. Функция открытия модального окна.  

function hidepopup(){ 
  popup.classList.remove('popup_opened'); 
} 
popupClose.addEventListener('click', hidepopup) 
// 2. Функция закрытия модального окна 

