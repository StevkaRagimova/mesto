import '../styles/index.css';
import { popupConfig, initialValue, editButton, addButton } from "./constants.js";
import Card from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

function createCard(cardItem) {
  const card = new Card({
    data: cardItem, 
    handleCardClick: () => {popupWithImage.openPopup(cardItem)}},
    '#element').fillCard();
  return card;
};

const cardsList = new Section({
  array: initialValue,
  renderer: (cardItem) => {
    const newCard = createCard(cardItem);
    cardsList.addItem(newCard)}}, '.elements'
);
cardsList.renderItems();

const popupWithImage = new PopupWithImage('.popup_figure');
popupWithImage.setEventListeners();

const infoProfile = new UserInfo('.profile__name', '.profile__workplace');

const profilePopup = new PopupWithForm('.popup_profile',
  {handleFormSubmit: (inputsValues) => {infoProfile.setUserInfo(inputsValues)}}
);

profilePopup.setEventListeners();

const cardPopup = new PopupWithForm('.popup_picture ', {handleFormSubmit: (cardPopupValues) => {
  const userCard = createCard(cardPopupValues);
  cardsList.addItem(userCard);
}});
cardPopup.setEventListeners();

const popupCard = document.querySelector(".popup_picture");
const popupProfile = document.querySelector(".popup_profile");
const popupProfileValidation = new FormValidator(popupConfig, popupProfile);
const popupCardValidation = new FormValidator(popupConfig, popupCard);

popupCardValidation.enableValidation();
popupProfileValidation.enableValidation();


editButton.addEventListener('click', () => {
  const dataProfile = infoProfile.getUserInfo();
  profilePopup.setInputsValues(dataProfile);
  profilePopup.openPopup();
});

addButton.addEventListener('click', () => {
  cardPopup.openPopup();
});
