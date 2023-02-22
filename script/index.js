let body = document.querySelector('body');
let content = document.querySelector('.content');
let page = document.querySelector('.page');
let name = 'Жак-Ив Кусто'
let job = 'Исследователь океана'


const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupClose = document.querySelector('.popup__close');

const form = document.querySelector('#form');

const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');

const profileInfoName = document.querySelector('.profile__info-name');
const profileInfoJob = document.querySelector('.profile__info-job');

function showpopup(){
    popup.classList.add('popup__opened');
    nameInput.setAttribute('value', name);
    jobInput.setAttribute('value', job);
    profileInfoName.textContent = name
    profileInfoJob.textContent = job
}

profileButtonEdit.addEventListener('click', showpopup)
// 1. Функция открытия модального окна. 

function hidepopup(){
    popup.classList.remove('popup__opened');
}
popupClose.addEventListener('click', hidepopup)
// 2. Функция закрытия модального окна

const popup = document.querySelector('.popup');

function saveChangeAttributeValue (event){
    event.preventDefault()  
    name = nameInput.value
    job = jobInput.value
    showpopup(name, job); 
    hidepopup();
}
form.addEventListener('submit', saveChangeAttributeValue);
//3. Функция сохранения данных(то есть отправки формы)


