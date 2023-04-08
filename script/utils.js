
buttonClose.forEach(button => button.addEventListener('click',() => {
    const popupElement = button.closest('.popup_opened')
    hidePopup(popupElement)
  }));

  function showPopup (popupElement) {
    popupElement.classList.add('popup_opened')
  
    document.addEventListener("keydown", onEscapePress)
  } 
  
  function hidePopup (popup) { 
    popup.classList.remove("popup_opened") 
  
    document.removeEventListener("keydown", onEscapePressClose)
  } 
  
  function onOverlayClickClose (event) {
    if (event.target === event.currentTarget){
      hidePopup(event.target);
    }
  };
  
  function onEscapePressClose (event) {
    if (event.key === "Escape") {  
      const popupElement = document.querySelector('.popup_opened')  
      hidePopup(popupElement) 
    } 
  };