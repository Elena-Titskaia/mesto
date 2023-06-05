export default class Card { 
  constructor(data, templateSelector, openPopupImage, openPopupConfirmDeleted, changeLikes) { 
    // console.log(data) 
    this._data = data; 
    this._name = data.name; 
    this._link = data.link; 
    this._myId = data.myid; 
    this._ownerId = data.owner._id; 
    this._likes = data.likes; 
    this._likesTotal = data.likes.length; 
    this._cardId = data._id; 
    this._templateSelector = templateSelector; 
    this._openPopupImage = openPopupImage; 
    this._openPopupConfirmDeleted = openPopupConfirmDeleted; 
    this._changeLikes = changeLikes; 
  } 
 
  _getTemplate() { 
    const cardElement = document 
      .querySelector(this._templateSelector) 
      .content.querySelector(".element") 
      .cloneNode(true); 
 
    return cardElement; 
  } 
 
  generateCard() { 
      this._element = this._getTemplate(); 
      this._cardTitle = this._element.querySelector ('.element__title'); 
      this._cardImage = this._element.querySelector ('.element__image'); 
      this._cardTrashButton = this._element.querySelector ('.element__trash'); 
      this._cardLikeButton = this._element.querySelector ('.element__like'); 
      this._cardLikeSum = this._element.querySelector('.element__number'); 
      this._cardTitle.textContent = this._name; 
      this._cardImage.src = this._link; 
      this._cardImage.alt = this._name; 
      this._verifyLikeSum(); 
      this._choiceTrashButtonVisible(); 
      this._setEventListeners(); 
      return this._element;  
    } 
 
    _setEventListeners() { 
      this._cardImage.addEventListener('click',this._handleCardClick); 
      this._cardTrashButton.addEventListener('click', this._handleDeleteClick);//  
      this._cardLikeButton.addEventListener('click', this._handleLikeClick); 
  } 
 _choiceTrashButtonVisible(){ 
   this._myId === this._ownerId ? this._cardTrashButton.style.display = 'block' : this._cardTrashButton.style.display = 'none' 
 } 
 
  _verifyLikeSum(){ 
 this._likes.forEach(element => { 
  if (element._id === this._myId) { 
    this._cardLikeButton.classList.add('element__like_active') 
    return  
  } 
 }) 
 this._cardLikeSum.textContent = this._likesTotal 
} 
 
  _handleCardClick = () => { 
    this._openPopupImage(this._data); 
  } 
   
  _handleLikeClick = () => { 
    // this._changeLikes(this._cardLikeButton, this._cardId)  
    if (this._cardLikeButton.classList.contains('element__like_active')){
      this._changeLikes(true , this._cardId)
    } else {
      this._changeLikes(false , this._cardId)
    }// 
  } 
 
  _handleDeleteClick = () => { 
    this._openPopupConfirmDeleted({card: this, cardId: this._cardId})// указать какая карточка 
  } 
 
  setLikes(likes){ 
    this._cardLikeButton.classList.toggle('element__like_active'); 
    this._cardLikeSum.textContent = likes.length 
  } 
 
  removeCard() { 
    this._element.remove(); 
    this._element = null; 
  } 
} 