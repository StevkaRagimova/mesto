import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._imageFigure = this._popup.querySelector('.figure__image');
    this._subtitleFigure = this._popup.querySelector('.figure__subtitle');
  };

  openPopup(data) {
    super.openPopup();
    this._imageFigure.src = data.link;
    this._imageFigure.alt = data.name;
    this._subtitleFigure.textContent = data.name;
  };
};