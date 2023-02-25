export const popupConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active"
};

export const initialValue = [
  {
    pictureTitle: "Архыз",
    pictureLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
  },
  {
    pictureTitle: "Челябинская область",
    pictureLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
  },
  {
    pictureTitle: "Иваново",
    pictureLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
  },
  {
    pictureTitle: "Камчатка",
    pictureLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
  },
  {
    pictureTitle: "Холмогорский район",
    pictureLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
  },
  {
    pictureTitle: "Байкал",
    pictureLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
  }
];


export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');

const identifier = 'https://mesto.nomoreparties.co/v1/cohort-60';
const token = '4f70f1df-21fb-4c99-833d-40b28b677ede';