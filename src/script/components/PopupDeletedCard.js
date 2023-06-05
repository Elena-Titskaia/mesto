import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
 constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector('.popup__form');
    this._submitButton = this._formElement.querySelector('.popup__submit-btn'); 
    this._originalSubmitButton = this._submitButton.textContent
}

setEventListeners(){
    super.setEventListeners();
    this._formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        this._submitButton.textContent = `${this._submitButton.textContent}...`
        this._handleFormSubmit({ card: this._element, cardId: this._cardId })
    })
}
    
setupDefaultButtonText(){
    this._submitButton.textContent = this._originalSubmitButton;
}

open = ({ card, cardId }) => {
    super.open()
    this._element = card;
    this._cardId = cardId
}
}