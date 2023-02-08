export default class UserInfo {
  constructor (userNameSelector, userDescriptionSelector) {
    this._userName = document.querySelector(firstField);
    this._userDescription = document.querySelector(secondField);
  };
  
  getUserInfo() {
    this._profileFields = {}
    this._profileFields.name = this._userName.textContent;
    this._profileFields.activity = this._userDescription.textContent;
    return this._profileFields;
  };

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userDescription.textContent = data.activity;
  };
};   