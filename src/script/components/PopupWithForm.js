import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, handleFormSubmit){
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector('.popup__form');
    this._inputList = this._formElement.querySelectorAll('.popup__text');
    this._submitButton = this._formElement.querySelector('.popup__submit-btn'); 
    this._originalSubmitButton = this._submitButton.textContent
}

setEventListeners(){
    super.setEventListeners();
    this._formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        this._submitButton.textContent = `${this._submitButton.textContent}...`
        this._handleFormSubmit(this._getInputsValue());
    })
}

_getInputsValue(){
    this._inputValues = {};
    this._inputList.forEach(input => {
        this._inputValues[input.name] = input.value
        });
    return this._inputValues;

}

setInputsValue(dataUser){
    this._inputList.forEach(input => {
        input.value = dataUser[input.name]
    })
}

setupDefaultButtonText(){
    this._submitButton.textContent = this._originalSubmitButton;
}

close(){
    super.close();
    this._formElement.reset();
}
}

// setEventListeners(){
//     super.setEventListeners();
//         this._formElements.addEventListener('submit', (evt) => {
//             evt.preventDefault();
//             this._handleFormSubmit(this._getInputValues());
//         });
//     }черновик 