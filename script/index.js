
let page = document.querySelector('.page');
let content = document.querySelector('.content');
let popup = document.querySelector('.popup'); //модальное окно 
let form = document.querySelector('#form'); // тег формы
let profileButtonEdit = document.querySelector('.profile__button-edit');//кнопка открытия
let popupClose = document.querySelector('.popup__close');// кнопка закрытия
let profileInfoName = document.querySelector('.profile__info-name'); // текстовый эл-т
let profileInfoJob = document.querySelector('.profile__info-job'); // текстовый эл-т
let nameInput = document.querySelector('.popup__text_type_name'); // поле ввода имя
let jobInput = document.querySelector('.popup__text_type_job'); // поле ввода работы
//5 

const elementArea = document.querySelector('.elements');//контейнер куда добавляем песни
let profileButtonAdd = document.querySelector('.profile__button-add'); //кнопка открытия карточки добавления
let elementImage = document.querySelector('.element__image');
let elementTitle = document.querySelector('.element__title');
let titleInput = document.querySelector('.popup__text_type_title');
let linkInput = document.querySelector('.popup__text_type_link');
//добавить лайк и удаление
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; //массив готовых карточек
  //его надо добавить в ДОМ 
  const initialCardsElements = [];
  for (let i = 0; i < initialCards.length; i++) {
  const cardTitle = initialCards[i].name;
  const cardImage = initialCards[i].link;
  addElement(cardTitle, cardImage);
}


//функция открытия попапа "новое место"

    function addElement(titleValue,imageValue){
    
        const elementImage = document.createElement('img');
        elementImage.classList.add('element__image');
        elementImage.alt = titleValue; // добавляем атрибут alt для изображения
        elementImage.src = imageValue; // добавляем путь к изображению
        const elementData = document.createElement('div');
        elementData.classList.add('element__data');
        const elementTitle = document.createElement('h4');
        elementTitle.classList.add('element__title');
        elementTitle.textContent = titleValue;// что-то надо сделать с текстовым содердимым
        const likeButtonElement = document.createElement('button');
        likeButtonElement.classList.add('element__like');
        const trashButtonElement = document.createElement('button');
        trashButtonElement.classList.add('element__trash');
        //собираем все элементы в один и будем добавлять в DOM
        cardConteiner.append( elementImage, elementTitle, likeButtonElement, trashButtonElement);
        elementArea.appendChild(cardConteiner);
    }

    profileButtonAdd.addEventListener('click', addElement);///бля ну не только элемент

//4спринт
function showpopup(){
    popup.classList.add('popup_opened');
    nameInput.value = profileInfoName.textContent;
    jobInput.value = profileInfoJob.textContent;
}

profileButtonEdit.addEventListener('click', showpopup);
// 1. Функция открытия модального окна. 

function hidepopup(){
    popup.classList.remove('popup_opened');
}
popupClose.addEventListener('click', hidepopup)
// 2. Функция закрытия модального окна


function saveChangeAttributeValue (event){
    event.preventDefault()  
    profileInfoName.textContent = nameInput.value;
    profileInfoJob.textContent = jobInput.value;
    hidepopup();
}
form.addEventListener('submit', saveChangeAttributeValue);
//3. Функция сохранения данных(то есть отправки формы)
//4 спринт 

// 5 спринт

