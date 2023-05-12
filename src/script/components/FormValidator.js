
export default class FormValidator {
    constructor (settings, formElement){
        this._settings = settings;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)
        );
        this._submitButton = this._formElement.querySelector(this._settings.submitButtonSelector);
    }

    _showInputError(inputElement){
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._settings.inputErorrClass);
        errorElement.classList.add(this._settings.errorClass);
        errorElement.textContent = inputElement.validationMessage;
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._settings.inputErorrClass);
        errorElement.classList.remove(this._settings.errorClass);
        errorElement.textContent = "";
    }

    _checkInputValidity (inputElement) {
       if (!inputElement.validity.valid) {
        this._showInputError(inputElement)
       } else {
        this._hideInputError(inputElement)
       }
    }

    _hasInputValid(){
        return this._inputList.some((inputElement)=> {
        return !inputElement.validity.valid})
    }

   _toggleButtonState () {
        if (this._hasInputValid()) {
            this._submitButton.classList.add(this._settings.inactiveButtonClass);
            this._submitButton.disabled = true; 
        } else {
            this._submitButton.classList.remove(this._settings.inactiveButtonClass);
            this._submitButton.disabled = false; 
        }
    };

    _setEventListeners () {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
          });
        });
    };

    resetPopupError () {
        this._inputList.forEach(inputElement => this._hideInputError(inputElement))
        this._toggleButtonState()
    }

    enableValidation() {
        this._setEventListeners();
    }
}
