import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupElement, selectors, caption, popopImageImage) {
    super(popupElement, selectors);
    this._caption = caption;
    this._popopImageImage = popopImageImage;
  }
  open(name, link) {
    super.open();   
    this._popopImageImage.setAttribute('src', link);
    this._popopImageImage.setAttribute('alt', name);
    this._caption.textContent = name;
  }
}