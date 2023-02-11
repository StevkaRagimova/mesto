import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._imageFigure = this._popup.querySelector('.figure__image');
    this._subtitleFigure = this._popup.querySelector('.figure__subtitle');
  };

  open(data) {
    super.open();
    this._imageFigure.src = data.pictureLink;
    this._imageFigure.alt = data.pictureTitle;
    this._subtitleFigure.textContent = data.pictureTitle;
  };
};

  close () {
    super.close();
    this._form.reset();
  }