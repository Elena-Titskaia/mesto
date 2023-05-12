export default class Card {
  constructor(data, templateSelector, openPopupImage) {
    this._data = data;
    this._name = data.title;
    this._link = data.link;
  
    this._templateSelector = templateSelector;
    this._openPopupImage = openPopupImage;
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
      this._cardTitle.textContent = this._name;
      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;

      this._setEventListeners();
      return this._element; 
    }

    _setEventListeners() {
      this._cardImage.addEventListener('click',this._handleCardClick);
      this._cardTrashButton.addEventListener('click', this._handleDeleteClick);
      this._cardLikeButton.addEventListener('click', this._handleLikeClick);
  }

  _handleCardClick = () => {
    this._openPopupImage(this._data);
  }
  
  _handleLikeClick = () => {
      this._cardLikeButton.classList.toggle('element__like_active');
      
  }

  _handleDeleteClick = () => {
      this._element.remove();
      this._element = null;
  }
}