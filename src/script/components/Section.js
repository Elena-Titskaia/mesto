export default class Section{
    constructor(renderer, containerSelector)
    {
        // this._cardList = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector)
    }
    addCardFromList(dataCard){
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

// cardList.forEach(object => { 
//     elementsArea.append(createElement(object)) 
// });