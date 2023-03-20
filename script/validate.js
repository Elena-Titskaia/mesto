const obj = {
    formSelector: '.popup__form',// формы
    inputSelector: '.popup__text',// инпуты
    submitButtonSelector: '.popup__submit-btn', // кнопки
    errorClass: 'popup__error_active', // это span
    inputErrorClass: 'popup__text_error', // это красная черта unput
    inactiveButtonClass: 'popup__submit-btn_disabled'// button disabled
};//ключи  

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

function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    addOverlayListeners(popup);
}
    
function addOverlayListeners (popupElement){
    document.addEventListener('keydown', escapeFromPopup)
    popupElement.addEventListener('mousedown', closeOnOverlayClick)
}
    
function removeOverlayListeners (popupElement) {
    popupElement.removeEventListener('mousedown', closeOnOverlayClick)
    document.removeEventListener('keydown', escapeFromPopup)
}
  
function closeOnOverlayClick(event) {
    const popupElement = event.target.closest('.popup_opened');
    if (!popupElement) {
      const openedPopup = document.querySelector('.popup_opened');
      removeOverlayListeners(openedPopup);
      openedPopup.classList.remove('popup_opened');
    }
}

function escapeFromPopup(event) {
    if (event.key === 'Escape') {
      const popupElement = document.querySelector('.popup_opened');
      removeOverlayListeners(popup);
      popup.classList.remove('popup_opened');
    }
}
  // const addOverlayListener = () => {
  //   document.addEventListener('keydown', (event) => {
  //     if (event.key === 'Escape') {
  //       const activePopups = document.querySelectorAll('.popup_opened');
  //       console.log(activePopups)
  //       if (activePopups.length){
  //         activePopups.forEach((activePopup) => {
  //           activePopup.classList.remove('popup_opened');
  //         });
  //       }
  //     }
  //   });
  // };
  

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
