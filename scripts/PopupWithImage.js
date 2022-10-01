import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, caption) {
    super(popupSelector);
    this._caption = caption;
  }
  open(name, link) {
    super.open();
    
    console.log(this._popupSelector);
    console.log("вылезает не та картинка");
    
    this._popupSelector.setAttribute('src', link);
    this._popupSelector.setAttribute('alt', name);
    this._caption.textContent = name;
  }
}

// function openPopupImage(name, link, textCaption) {
//   popupImage.open();
//   popopImageImage.setAttribute('src', link);
//   popopImageImage.setAttribute('alt', name);
//   caption.textContent = textCaption;
// }