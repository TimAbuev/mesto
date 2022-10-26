export default class UserInfo {
constructor(userName, userDescription) {
    this._name = userName;
    this._description = userDescription;
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