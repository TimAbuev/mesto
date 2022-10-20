import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { formSettings, selectors, initialCards } from "../utils/constants.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import { popups } from "../utils/constants.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

const popupImage = document.querySelector(selectors.popupImage);
const popopImageImage = document.querySelector(selectors.popopImageImage);
const caption = document.querySelector(selectors.caption);
const buttonPlus = document.querySelector(selectors.buttonPlus);
const cardsContainer = document.querySelector(selectors.cardsContainer);
const popupProfileInputJob = document.querySelector(selectors.popupProfileInputJob);
const popupProfileInputName = document.querySelector(selectors.popupProfileInputName);
const profileJob = document.querySelector(selectors.profileJob);
const profileName = document.querySelector(selectors.profileName);
const popupProfile = document.querySelector(selectors.popupProfile);
const formFromPopupMesto = document.querySelector(selectors.formFromPopupMesto);
const formFromPopupProfile = document.querySelector(selectors.formFromPopupProfile);
const buttonSubmit = formFromPopupMesto.querySelector(selectors.buttonSubmit);
const popupMesto = document.querySelector(selectors.popupMesto);
const buttonEdit = document.querySelector(selectors.buttonEdit);
const validatingFormPopupMesto = new FormValidator(formSettings, formFromPopupMesto);
validatingFormPopupMesto.enableValidation();
const validatingFormPopupProfile = new FormValidator(formSettings, formFromPopupProfile);
validatingFormPopupProfile.enableValidation();

const popupWithImageInstance = new PopupWithImage(popupImage, caption, popopImageImage);
popupWithImageInstance.setEventListeners();

const popupMestoInstance = new PopupWithForm(popupMesto, addCard);
popupMestoInstance.setEventListeners();

const userInfoInstance = new UserInfo(profileName, profileJob);

const popupUserInfoInstance = new PopupWithForm(popupProfile, addUserInfo);
popupUserInfoInstance.setEventListeners();

function addUserInfo(data) {
  userInfoInstance.setUserInfo(data);
} 

buttonEdit.addEventListener('click', function () {
  validatingFormPopupProfile.clearError();
  const currentUserInfo = userInfoInstance.getUserInfo();
  //console.log(currentUserInfo);
  popupProfileInputName.value = currentUserInfo.userName;
  popupProfileInputJob.value = currentUserInfo.userDescription;
  popupUserInfoInstance.open();
  // popupProfileInputName.value = profileName.textContent;
  // popupProfileInputJob.value = profileJob.textContent;
});

// formFromPopupProfile.addEventListener('submit', function (event) {
//   event.preventDefault();
//   // profileName.textContent = popupProfileInputName.value;
//   // profileJob.textContent = popupProfileInputJob.value;
//   //console.log(popupProfileInputJob.value);
//   popupUserInfoInstance.close();
// });
  
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
    formFromPopupMesto.reset();
    validatingFormPopupMesto.clearError();
    validatingFormPopupMesto.disabledSubmitButton(buttonSubmit);
    popupMestoInstance.open();
  });



} //End of addEventListeners()
addEventListeners();