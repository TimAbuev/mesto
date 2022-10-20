export default class UserInfo {
constructor(userNameSelector, userDescriptionSelector) {
    this._name = userNameSelector;
    this._description = userDescriptionSelector;
  }
  getUserInfo() {
    const obj = {
      userName: this._name.textContent,
      userDescription: this._description.textContent,
    };
    return obj;
    
  }
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._description.textContent = data.job;
  }

}