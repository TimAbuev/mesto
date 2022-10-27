import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { formSettings, selectors, initialCards } from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const popupImage = document.querySelector(selectors.popupImage);
const popopImageImage = document.querySelector(selectors.popopImageImage);
const caption = document.querySelector(selectors.caption);
const buttonPlus = document.querySelector(selectors.buttonPlus);
const cardsContainer = document.querySelector(selectors.cardsContainer);
const profileJob = document.querySelector(selectors.profileJob);
const profileName = document.querySelector(selectors.profileName);
const popupProfile = document.querySelector(selectors.popupProfile);
const formFromPopupMesto = document.querySelector(selectors.formFromPopupMesto);
const formFromPopupProfile = document.querySelector(selectors.formFromPopupProfile);
const popupMesto = document.querySelector(selectors.popupMesto);
const buttonEdit = document.querySelector(selectors.buttonEdit);

const formFromPopupMestoInstance = new FormValidator(formSettings, formFromPopupMesto);
formFromPopupMestoInstance.enableValidation();
const formFromPopupProfileInstance = new FormValidator(formSettings, formFromPopupProfile);
formFromPopupProfileInstance.enableValidation();

const popupWithImageInstance = new PopupWithImage(popupImage, caption, popopImageImage);
popupWithImageInstance.setEventListeners();

const popupMestoInstance = new PopupWithForm(popupMesto, addCard);
popupMestoInstance.setEventListeners();

const userInfoInstance = new UserInfo(profileName, profileJob);

const popupProfileInstance = new PopupWithForm(popupProfile, addUserInfo);
popupProfileInstance.setEventListeners();

function addUserInfo(data) {
  userInfoInstance.setUserInfo(data);
} 

function addCard(formDataObject) {
  sectionInstance.addItem(createCard(formDataObject));
}

function createCard(data) {
  const card = new Card(
    {
      handleCardClick: (name, link) => {
        popupWithImageInstance.open(name, link);
      }
    },
    data, '.template-card', selectors);
  return card.generate();
}

const sectionInstance = new Section({
  items: initialCards,
  renderer: (item) => {
    sectionInstance.addItem(createCard(item));
  }
}, cardsContainer);
sectionInstance.renderItems();

function addEventListeners() {

  buttonPlus.addEventListener('click', () => {
    formFromPopupMestoInstance.clearError();
    formFromPopupMestoInstance.disabledSubmitButton();
    popupMestoInstance.open();
  });

  buttonEdit.addEventListener('click', function () {
    formFromPopupProfileInstance.clearError();
    const currentUserInfo = userInfoInstance.getUserInfo();
    popupProfileInstance.setInputValues(currentUserInfo);
    popupProfileInstance.open();
  });

} //End of addEventListeners()
addEventListeners();