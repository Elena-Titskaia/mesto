 
//проверяет, есть ли невалидный элемент в переданном списке элементов ввода
function hasInvalidInput (inputList) {
    return inputList.some((input) => {
    return !input.validity.valid;
  })
};

// включает или отключает кнопку отправки формы
function toggleButtonState (inputList, form) {
    const buttonElement = form.querySelector(settings.submitButtonSelector);
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(settings.inactiveButtonClass);
       
    } else {
        buttonElement.classList.remove(settings.inactiveButtonClass);
    }
};

//добавляет обработчики событий на элементы ввода
const setEventListeners = (form) => {
    const inputList = Array.from(form.querySelectorAll(settings.inputSelector));
    inputList.forEach((input) => {
      input.addEventListener('input', function () {
        checkInputValidity(input);
        toggleButtonState(inputList, form);
      });
    });
};

//очистка форм при открытии 
function resetPopupError (popupElement, settings) {
    const inputList = Array.from(popupElement.querySelectorAll(settings.inputSelector));
    inputList.forEach(input => hideInputError(input))
    toggleButtonState(inputList, popupElement)
}

//проверяет валидность элемента ввода и вызывает showInputError или hideInputError в зависимости от результата проверки
const checkInputValidity = (input) => {
    if (!input.validity.valid) {
      showInputError(input, input.validationMessage);
    } else {
      hideInputError(input);
    }
};

//трансляция ошибки
const showInputError = (input, errorMessage) => {
    const errorElement = document.getElementById(`${input.id}-error`);//formElement.querySelector(`.${input.name}-error`);//?
    input.classList.add(settings.inputErrorClass);// это инпут red
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);//это спан
};

//скрываем ошибку
const hideInputError = (input) => {
    const errorElement = document.getElementById(`${input.id}-error`);
    input.classList.remove(settings.inputErrorClass);//red
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = '';
};

//функция предотвращает отправку формы и вызывает функцию setEventListeners
function enableValidation (settings) {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    formList.forEach((form) => {
        setEventListeners (form)
    });
}; 

enableValidation(settings);
