export default class Popup {
  constructor(popupElement, selectors) {
    this._selectors = selectors;
    this._popupElement = popupElement;
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popupElement.classList.add(this._selectors.openedPopup);
    document.addEventListener('keyup', this._handleEscClose);
  }
  close() {
    this._popupElement.classList.remove(this._selectors.openedPopup);
    document.removeEventListener('keyup', this._handleEscClose);
  }
  _handleEscClose(evt) {
    evt.preventDefault();
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains(this._selectors.openedPopup)) {
        this.close();
      }
      if (evt.target.classList.contains(this._selectors.buttonsClose)) {
        this.close();
      }
    })
    
  }

}
