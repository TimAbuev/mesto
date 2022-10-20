export default class UserInfo {
constructor(userNameSelector, userDescriptionSelector) {
    //userNameSelector, userDescriptionSelector
    this._name = userNameSelector;
    this._description = userDescriptionSelector;
    //console.log(this._name);
// Принимает в кнстрктр объект с селекторами двух элементов:
// имени пользователя и элемента информации о себе.
  }
  getUserInfo() {
    const obj = {
      userName: this._name.textContent,
      userDescription: this._description.textContent,
    };
    // obj[this._name.userName] = this._name.textContent;
    // obj[this._description.userDescription] = this._description.textContent;
    return obj;
    
  }
  //   возвращает объект с данными пользователя. 
  //   Этот метод пригодится когда данные пользователя 
  //   нужно будет подставить в форму при открытии.
  setUserInfo(data) {
    console.log(data);
    this._name.textContent = data.name;
    this._description.textContent = data.job;
  }
  // Принимает новые данные пользователя добавляет их на страницу.

}