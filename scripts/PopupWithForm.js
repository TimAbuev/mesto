import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, callbackSubmitForm) {
    super(popupElement);
    this._callbackSubmitForm = callbackSubmitForm;
  }
  _getInputValues() {

  }
  setEventListeners() {
    super.setEventListeners();
    // для теста переопределения метода добавил console.log

      console.log("setEventListeners в классе PopupWithForm");
  }




  close() {
    super.close();

  }
}
