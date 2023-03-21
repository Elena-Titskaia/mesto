 
//проверяет, есть ли невалидный элемент в переданном списке элементов ввода
function hasInvalidInput (inputList) {
    return inputList.some((input) => {
    return !input.validity.valid;
  })
};

// включает или отключает кнопку отправки формы
function toggleButtonState (inputList, form) {
    const buttonElement = form.querySelector(obj.submitButtonSelector);
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(obj.inactiveButtonClass);
       
    } else {
        buttonElement.classList.remove(obj.inactiveButtonClass);
    }
};

//добавляет обработчики событий на элементы ввода
const setEventListeners = (form) => {
    const inputList = Array.from(form.querySelectorAll(obj.inputSelector));
    inputList.forEach((input) => {
      input.addEventListener('input', function () {
        checkInputValidity(input);
        toggleButtonState(inputList, form);
      });
    });
};

//очистка форм при открытии 
function resetPopupError (popupElement, obj) {
    const inputList = Array.from(popupElement.querySelectorAll(obj.inputSelector));
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
    input.classList.add(obj.inputErrorClass);// это инпут red
    errorElement.textContent = errorMessage;
    errorElement.classList.add(obj.errorClass);//это спан
};

//скрываем ошибку
const hideInputError = (input) => {
    const errorElement = document.getElementById(`${input.id}-error`);
    input.classList.remove(obj.inputErrorClass);//red
    errorElement.classList.remove(obj.errorClass);
    errorElement.textContent = '';
};

//функция предотвращает отправку формы и вызывает функцию setEventListeners
function enableValidation (obj) {
    const formList = Array.from(document.querySelectorAll(obj.formSelector));
    formList.forEach((form) => {
        setEventListeners (form)
    });
}; 

enableValidation(obj);
