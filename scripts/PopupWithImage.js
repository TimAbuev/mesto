import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, caption, popopImageImage) {
    super(popupSelector);
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

// function openPopupImage(name, link, textCaption) {
//   popupImage.open();
//   popopImageImage.setAttribute('src', link);
//   popopImageImage.setAttribute('alt', name);
//   caption.textContent = textCaption;
// }