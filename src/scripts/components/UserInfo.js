export default class UserInfo {
  constructor (userNameSelector, userDescriptionSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._userDescription = document.querySelector(userDescriptionSelector);
  };
  
  getUserInfo() {
    this._profileFields = {}
    this._profileFields.form__input_name = this._userName.textContent;
    this._profileFields.form__input_workplace = this._userDescription.textContent;
    return this._profileFields;
  };

  setUserInfo(data) {
    this._userName.textContent = data.form__input_name;
    this._userDescription.textContent = data.form__input_workplace;
  };
};   