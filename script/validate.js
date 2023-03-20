const obj = {
    formSelector: '.popup__form',// формы
    inputSelector: '.popup__text',// инпуты
    submitButtonSelector: '.popup__submit-btn', // кнопки
    errorClass: '.popup__error_active', // это span
    inputErrorClass: 'popup__text_error', // это красная черта unput
    inactiveButtonClass: 'popup__submit-btn_disabled'// button disabled
};

enableValidation(obj);

//функция предотвращает отправку формы и вызывает функцию setEventListeners
function enableValidation (form, obj) {
    const formList = Array.from(document.querySelectorAll('formSelector'));
    formList.forEach((form) => {
        setEventListeners (form, obj)
    });
}; 
//добавляет обработчики событий на элементы ввода, чтобы вызывать checkInputValidity при изменении их содержимого
const setEventListeners = (form, obj) => {
    const inputList = Array.from(document.querySelectorAll("inputSelector"));
    inputList.forEach((input) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(form, input, obj);
      });
    });
};
//проверяет валидность элемента ввода и вызывает showInputError или hideInputError в зависимости от результата проверки
const checkInputValidity = (form, input, obj) => {
    if (!input.validity.valid) {
      showInputError(form, input, input.validationMessage, obj);
    } else {
      hideInputError(form, input, obj);
    }
  };

  const showInputError = (form, input, errorMessage, obj) => {
    const errorElement = formElement.querySelector(`.${input.name}-error`);//?
    input.classList.add(obj.inputErrorClass);// это инпут red
    errorElement.textContent = errorMessage;
    errorElement.classList.add(obj.errorClass);//это спан
  };
  
  const hideInputError = (form, input, obj) => {
    const errorElement = formElement.querySelector(`.${input.name}-error`);
    inputElement.classList.remove(obj.inputErrorClass);//red
    errorElement.classList.remove(obj.errorClass);
    errorElement.textContent = '';
  };

  //проверяет, есть ли невалидный элемент в переданном списке элементов ввода
  function hasInvalidInput(inputList, obj) {
    for (let input of inputList) {
      if (!input.validity.valid) {
        return true;
      }
    }
    return false;
  }
  
  
  hasInvalidInput();

  function toggleButtonState (inputList, submitButtonSelector, obj) {
    if (hasInvalidInput(inputList, obj)) {
        submitButtonSelector.classList.add(obj.inactiveButtonClass);
    } else {
        submitButtonSelector.classList.remove(obj.inactiveButtonClass);
    }
  };
  toggleButtonState(inputList, buttonElement, obj);
  
  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
});


// const inputList = form.querySelectorAll(inputSelector)//!
//         inputList.forEach(input => {
//             input.addEventListener('input', evt => {
//                 //проверяем данные введенные 
//                if (input.validity.valid){
//                 //скрыть ошибку 
//                }else{
//                 //показать ошибку
//                 const inputName = input.getAttribute('name')
//                 const errorPlace = document.getElementById(`${inputName}-error`)
//                 errorPlace.textContent = input.validationMessage
//                 errorPlace.classList.add(errorClass)
//                }
//             })
//         })

// const showInputError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     console.log(errorElement)
//     inputElement.classList.add('popup__error');
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add('popup__error_active');
//   };
  
// const hideInputError = (formElement, inputElement) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove('popup__error');
//     errorElement.classList.remove('popup__error_active');
//     errorElement.textContent = '';
//   };


