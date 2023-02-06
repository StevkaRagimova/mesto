export default class Card {
  constructor({data, handleCardClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._card = cardSelector;
  };
  _getCardTemplate() {
  const newItem = document.querySelector(this._card).content.querySelector('.element').cloneNode(true);
  return newItem;
  };

  fillCard() {
    this._item = this._getCardTemplate();
    this._item.querySelector('.element__title').textContent = this._name;
    this._item.querySelector('.element__image').src = this._link;
    this._item.querySelector('.element__image').alt = this._name;
    this._setEventListeners();
    return this._item;
  };
   
  _toggleLikeButton(evt) {
    evt.target.classList.toggle('element__button_active');
  };

  _removeCard() {
    this._item.remove();
    this._item = null;
  };

  _setEventListeners() {
    this._item.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick();
    });
    this._item.querySelector('.element__like-button').addEventListener('click', (evt) => {
      this._toggleLikeButton(evt);
    });
    this._item.querySelector('.element__trashbin-button').addEventListener('click', () => {
      this._removeCard();
    });
  }
};