let body = document.querySelector('body');
let content = document.querySelector('.content');
let name = 'Жак-Ив Кусто'
let job = 'Исследователь океана'


const profileButtonEdit = content.querySelector('.profile__button-edit');
const popupClose = content.querySelector('.popup__close');

const form = content.querySelector('#form');

const nameInput = content.querySelector('#name');
const jobInput = content.querySelector('#job');

const profileInfoName = content.querySelector('.profile__info-name');
const profileInfoJob = content.querySelector('.profile__info-job');

function changeProfileInfo (name, job){
    profileInfoName.textContent = name
    profileInfoJob.textContent = job
}
changeProfileInfo(name, job);

const popup = content.querySelector('.popup');

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
