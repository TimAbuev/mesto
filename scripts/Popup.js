import { selectors } from "../utils/constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
    //this.close = this.close.bind(this);
  }

  open() {
    this._popupSelector.classList.add(selectors.openedPopup);
    document.addEventListener('keyup', this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove(selectors.openedPopup);
    document.removeEventListener('keyup', this._handleEscClose);
  }

  _handleEscClose(evt) {
    evt.preventDefault();
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners(popups) {
    popups.forEach((popup) => {
      popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains(selectors.openedPopup)) {
          this.close(popup)
        }
        if (evt.target.classList.contains(selectors.buttonsClose)) {
          this.close(popup)
        }
      })
    });
  }

}