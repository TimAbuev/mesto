import Popup from "./Popup.js";

export default class PopupWithAreYouSure extends Popup {
  constructor(popupElement, selectors, button, handleClickYes) {
    super(popupElement, selectors);
      this._button = button;
      this._handleClickYes = handleClickYes;
  }
  setEventListeners() {
    super.setEventListeners();

    this._button.addEventListener('click', () => {
      this._handleClickYes();
    })
  }

  handleClickYes(yes) {
    this._handleClickYes = yes;
  }

}