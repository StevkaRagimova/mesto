export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _getResponseData(res) {  // как переобозвать эту переменную?
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject((`Ошибка: ${res.status}`));
    }
  }

  updateUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => this._getResponseData(res));
  }

  patchUserInfo(obj) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: obj.name,
        about: obj.about
      })
    })
      .then(res => this._getResponseData(res));
  }

  addNewCard() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => this._getResponseData(res));
  }

  itemDeletePopup(obj) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: obj.name,
        link: obj.link
      })
    })
      .then(res => this._getResponseData(res));
  }

  removeItem(elem) {
    return fetch(`${this._url}/cards/${elem}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this._getResponseData(res));
  }

  addLike(elem) {
    return fetch(`${this._url}/cards/${elem}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(res => this._getResponseData(res));
  }

  likeCounter(elem) {
    return fetch(`${this._url}/cards/${elem}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this._getResponseData(res));
  }

  userPicChange(obj) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: obj.avatar
      })
    })
      .then(res => this._getResponseData(res));
  }
}

  