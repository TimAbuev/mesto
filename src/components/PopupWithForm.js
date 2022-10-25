import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, submitHandler) {
    super(popupElement);
    this._submitHandler = submitHandler;
    this._form = popupElement.querySelector('form');
    this._inputElements = this._form.querySelectorAll('input');
  }
  _getInputValues() { //собирает данные всех полей формы.
    const formDataObject = {};

    this._inputElements.forEach((input) => {
      formDataObject[input.name] = input.value;
    })
    return formDataObject;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitHandler(this._getInputValues());
      this.close();
    });
  }
  close() {
    super.close(); // при закрытии попапа форма должна сбрасываться.
    this._form.reset();
  }
}
