import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupElement, caption, popopImageImage) {
    super(popupElement);
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