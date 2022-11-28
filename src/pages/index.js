//import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { formSettings, selectors, initialCards } from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from '../components/Api.js';

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
const avatar = document.querySelector(selectors.avatar);

const config = {
  url: 'https://mesto.nomoreparties.co',
  headers: {
    "content-type": "application/json",
    authorization: "697a4384-2695-44b9-a2ae-a1b7f71813d5"
  }
}

const api = new Api(config);

api.getCards()
  .then(function (data) {
    console.log(data);
    sectionInstance.renderItems(data);
  })
  .catch(function (err) {
    console.log('ошибка', err);
  })
api.getObject()
  .then(function (data) {
    avatar.setAttribute('src', data.avatar);
    profileName.textContent = data.name;
    profileJob.textContent = data.about;
  })
  .catch(function (err) {
    console.log('ошибка', err);
  })

const formFromPopupMestoInstance = new FormValidator(formSettings, formFromPopupMesto);
formFromPopupMestoInstance.enableValidation();
const formFromPopupProfileInstance = new FormValidator(formSettings, formFromPopupProfile);
formFromPopupProfileInstance.enableValidation();

const popupWithImageInstance = new PopupWithImage(popupImage, caption, popopImageImage);
popupWithImageInstance.setEventListeners();

const popupMestoInstance = new PopupWithForm(popupMesto, addCard);
popupMestoInstance.setEventListeners();
popupMestoInstance.setSubmitEvent();

const userInfoInstance = new UserInfo(profileName, profileJob);

const popupProfileInstance = new PopupWithForm(popupProfile, addUserInfo);
popupProfileInstance.setEventListeners();
popupProfileInstance.setSubmitEvent();


function addUserInfo(data) {
  api.editInfo({ name: data.name, about: data.job })
    .then(function () {
      userInfoInstance.setUserInfo(data);
    })
    .catch(function (err) {
      console.log('ошибка', err);
    })
}

function addCard(data) {
  api.postCard({ name: data.name, link: data.link })
  .then(function () {
    
    sectionInstance.addItem(createCard(data));
  })
  .catch(function (err) {
    console.log('ошибка', err);
  })
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
