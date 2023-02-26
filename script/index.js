
let page = document.querySelector('.page');
let content = document.querySelector('.content');
let popup = document.querySelector('.popup'); //модальное окно 
let form = document.querySelector('#form'); // тег формы
let profileButtonEdit = document.querySelector('.profile__button-edit');//кнопка открытия
let popupClose = document.querySelector('.popup__close');// кнопка закрытия
let profileInfoName = document.querySelector('.profile__info-name'); // текстовый эл-т
let profileInfoJob = document.querySelector('.profile__info-job'); // текстовый эл-т
let nameInput = document.querySelector('.popup__text_type_name'); // поле ввода имя
let jobInput = document.querySelector('.popup__text_type_job'); // поле ввода работа



function showpopup(){
    popup.classList.add('popup_opened');
    nameInput.value = profileInfoName.textContent;
    jobInput.value = profileInfoJob.textContent;
}

profileButtonEdit.addEventListener('click', showpopup)
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


