export default class UserInfo {
constructor(userName, userDescription, avatar) {
    this._name = userName;
    this._description = userDescription;
    this._avatar = avatar;
  }
  getUserInfo() {
    const obj = {
      name: this._name.textContent,
      job: this._description.textContent,
    };
    return obj;
  
  }
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._description.textContent = data.job;
  }
  setUserAvatar(data) {
     this._avatar.style.backgroundImage = `url('${data.avatar}')`;
  }

} 