import {initialCards as cardList} from './constants'
cardList ();
class Card {
    constructor(data, templateSelector) {
      this._text = data.name;
      this._link = data.link;

      this._templateSelector = templateSelector;

      this._cardTitle = this._element.querySelector ('.element__title');// this._element
      this._cardImage = this._element.querySelector ('.element__image');
      this._cardTrashButton = this._element.querySelector ('.element__trash');
      this._cardLikeButton = this._element.querySelector ('.element__like');
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(this._templateSelector)
        .content.querySelector(".card")
        .cloneNode(true);
  
      return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
    
        this._cardTitle.textContent = this._text;//тут херня
        this._cardImage.src = `url(${this._link})`;// и тут херня

        cardTitle.setAttribute('alt', this._text);
        cardImage.setAttribute('src', this._link);
        
        return this._element;
      }}
  
    _setEventListeners() {
        // cardImage.addEvenListener('click', () =>{
        //     this._handleOpenCardFullView(cardImage)
        // })

        cardTrashButton.addEvenListener('click', () =>{
            this._handleDeleteClick(cardTrashButton)
        })
        cardLikeButton.addEvenListener('click', () =>{
            this._handleLikeClick(cardLikeButton)
        })

    }
    // _handleOpenCardFullView(cardImage) {
    // //тут надо указать все из попапа .popup_type_image
    //     cardImage.
    // }
    _handleLikeClick(cardLikeButton) {
        cardLikeButton.classList.toggle('element__like_active');
    }
  
    _handleDeleteClick(cardTrashButton) {
        cardElement.remove();
    }
  
   

   
export { Card };