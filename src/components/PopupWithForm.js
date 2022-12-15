import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, submitHandler) {
    super(popupElement);
    this._submitHandler = submitHandler;
    this._form = popupElement.querySelector('form');
    this._button = this._form.querySelector('button[type="submit"]');
    this._buttonDefaultText = this._button.textContent;
    this._inputElements = this._form.querySelectorAll('input');
  }
  _getInputValues() { //собирает данные всех полей формы.
    const formDataObject = {};

    this._inputElements.forEach((input) => {
      formDataObject[input.name] = input.value;
    })
    return formDataObject;
  }
  setInputValues(data) {
    this._inputElements.forEach((input) => {
      // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
      input.value = data[input.name];
    });
  }
  setSubmitEvent() {
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

  renderLoading(isSending) {
    if(isSending) {
      this._button.textContent = 'Загрузка...';
    } else {
      this._button.textContent = this._buttonDefaultText;
    }
    
  }
}