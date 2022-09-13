export default class Card {
  constructor(data, template, selectors, openPopupImage) {
    this._text = data.name;
    this._image = data.link;
    this._template = template;
    this._selectors = selectors;
    this._openPopupImage = openPopupImage;
  }
  _getElement() {
    const newTemplate = document.querySelector(this._template).content.
    querySelector(this._selectors.divElementsCard)
    .cloneNode(true);
    return newTemplate;
  }
  generate() {
    this._element = this._getElement();
    this._setEventListeners();
    this._element.querySelector(this._selectors.elementsImage).setAttribute('src', this._image);
    this._element.querySelector(this._selectors.elementsImage).setAttribute('alt', this._text);
    const elementsTitle = this._element.querySelector(this._selectors.elementsTitle);
    elementsTitle.textContent = this._text;
    return this._element;
  }
  _setEventListeners() {
    this._element.querySelector(this._selectors.trashButton).addEventListener('click', this._removeElement);
    this._element.querySelector(this._selectors.wrapperButton).addEventListener('click', () => {
      this._openPopupImage(this._text, this._image, this._text);    
    });
    this._element.querySelector(this._selectors.like).addEventListener('click', () => {
      this._handleClickLike();
    });
  }//END OF _setEventListeners
  
  _handleClickLike () {
    this._element.querySelector(this._selectors.like).classList.toggle(this._selectors.likeActive);
  }
  _removeElement = () => {
    this._element.remove();
  } 
}