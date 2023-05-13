export default class Section{
    constructor({items ,renderer}, containerSelector)
    {
        this._cardList = items;
        this.renderer = renderer;
        this._container = document.querySelector(containerSelector)
    }
    addCardFromList(){
       this._cardList.forEach(item => {
        this.addItem(this.renderer(item));
       });
    // create new перенести как аргумент
       
    }
    addItem(elementDom){
        this._container.prepend(elementDom)
    }
}

// cardList.forEach(object => { 
//     elementsArea.append(createElement(object)) 
// });