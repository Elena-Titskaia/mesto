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

function changeProfileInfo (name, job){
    profileInfoName.textContent = name
    profileInfoJob.textContent = job
}
changeProfileInfo(name, job);

const popup = document.querySelector('.popup');

profileButtonEdit.addEventListener('click', function(){
    nameInput.setAttribute('value', name);
    jobInput.setAttribute('value', job);
    showpopup();
})

function hidepopup(){
    popup.classList.remove('popup__opened');
    body.classList.remove('content__stop');
}

function showpopup(){
    popup.classList.add('popup__opened');
    body.classList.add('content__stop');
}

form.addEventListener('submit', function (event){
  event.preventDefault()  
  name = nameInput.value
  job = jobInput.value
  changeProfileInfo(name, job); 
  hidepopup();
})

popupClose.addEventListener('click', hidepopup)
