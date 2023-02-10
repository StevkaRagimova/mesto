import '../styles/index.css';
import { popupConfig, initialValue, editButton, addButton } from "../scripts/constants.js";
import Card from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";

function createCard(cardItem) {
  const card = new Card({
    data: cardItem,
    handleCardClick: () => {popupWithImage.open(cardItem)}},
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
  profilePopup.popup();
});

addButton.addEventListener('click', () => {
  popupCardValidation.updateButtonState(); 
  cardPopup.popup();
});