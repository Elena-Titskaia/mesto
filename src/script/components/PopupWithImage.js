import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._popupImageCard = this._popup.querySelector('.popup__image-card'); 
        this._popupImageName = this._popup.querySelector('.popup__image-name'); 
    }

    open = (data) => {
        this._popupImageCard.src = data.link;
        this._popupImageCard.alt = data.title;
        this._popupImageName.textContent = data.title;
        super.open(); 
    }
}
 // handleCardClick(name, link) {
    //     this._popupWithImage = new PopupWithImage('.popup_type_image');
    //     this._popupWithImage.open(name, link);
    //   }