import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, handleFormSubmit){
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElements = this._popup.querySelector('.popup__form');
    this._inputList = this._formElements.querySelectorAll('.popup__text');
    this._submitButton = this._formElements.querySelector('popup__submit-btn');

    
}
 getInputsValue(){
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
setEventListeners(){
    super.setEventListeners();
    this._formElements.addEventListener('submit', this._handleFormSubmit)
    }

close(){
    super.close();
    this._formElements.reset();
}
}

// setEventListeners(){
//     super.setEventListeners();
//         this._formElements.addEventListener('submit', (evt) => {
//             evt.preventDefault();
//             this._handleFormSubmit(this._getInputValues());
//         });
//     }черновик 