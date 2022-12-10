import { selectors } from "../utils/constants.js";

export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popupElement.classList.add(selectors.openedPopup);
    document.addEventListener('keyup', this._handleEscClose);
  }
  close() {
    this._popupElement.classList.remove(selectors.openedPopup);
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
      if (evt.target.classList.contains(selectors.openedPopup)) {
        this.close();
      }
      if (evt.target.classList.contains(selectors.buttonsClose)) {
        this.close();
      }
    })
    
  }

}
