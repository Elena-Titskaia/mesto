export default class Section{ 
    constructor(renderer, containerSelector) 
    { 
        // this._cardList = items; 
        this._renderer = renderer; 
        this._container = document.querySelector(containerSelector) 
    } 
    renderItems(dataCard){ 
        dataCard.forEach(element => { 
        this._renderer(element); 
       }); 
    // create new перенести как аргумент 
    } 
 
    addItemPrepend(itemDom){ 
        this._container.prepend(itemDom) 
    } 
 
    addItemAppend(itemDom){ 
        this._container.append(itemDom) 
    } 
} 
