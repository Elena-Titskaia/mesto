const buttonClose = document.querySelectorAll('.popup__close');

buttonClose.forEach(button => button.addEventListener('click',() => {
    const popupElement = button.closest('.popup_opened')
    hidePopup(popupElement)
  }));