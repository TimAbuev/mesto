import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { formSettings, selectors, initialCards } from "../utils/constants.js";

const popups = document.querySelectorAll(selectors.popups);
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
const inputName = document.querySelector(selectors.inputName);
const inputLink = document.querySelector(selectors.inputLink);
const popupMesto = document.querySelector(selectors.popupMesto);
const buttonEdit = document.querySelector(selectors.buttonEdit);
const validatingFormPopupMesto = new FormValidator(formSettings, formFromPopupMesto);
validatingFormPopupMesto.enableValidation();
const validatingFormPopupProfile = new FormValidator(formSettings, formFromPopupProfile);
validatingFormPopupProfile.enableValidation();

initialCards.forEach((item) => {
  const card = createCard(item.name, item.link);
  cardsContainer.append(card);
})
function addCard(name, link) {
  const newCard = createCard(name, link);
  cardsContainer.prepend(newCard);
}
function createCard(name, link) {
  const card = new Card({ name, link }, '.template-card', selectors, openPopupImage);
  return card.generate();
}
function handleEscUp(evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    const active = document.querySelector(selectors.activePopup);
    closePopup(active);
  }
}
function closePopup(popup) {
  popup.classList.remove(selectors.openedPopup);
  document.removeEventListener('keyup', handleEscUp);
}
function openPopup(popup) {
  popup.classList.add(selectors.openedPopup);
  document.addEventListener('keyup', handleEscUp);
}
function openPopupImage(name, link, textCaption) {
  openPopup(popupImage);
  popopImageImage.setAttribute('src', link);
  popopImageImage.setAttribute('alt', name);
  caption.textContent = textCaption;
}
function addEventListeners() {
  
  popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains(selectors.openedPopup)) {
        closePopup(popup)
      }
      if (evt.target.classList.contains(selectors.buttonsClose)) {
        closePopup(popup)
      } 
    })
  });

  buttonEdit.addEventListener('click', function () {
    validatingFormPopupProfile.clearError();
    openPopup(popupProfile);
    popupProfileInputName.value = profileName.textContent;
    popupProfileInputJob.value = profileJob.textContent;
  });
  formFromPopupProfile.addEventListener('submit', function (event) {
    event.preventDefault();
    profileName.textContent = popupProfileInputName.value;
    profileJob.textContent = popupProfileInputJob.value;
    closePopup(popupProfile);
  });
  formFromPopupMesto.addEventListener('submit', function (event) {
    event.preventDefault();
    addCard(inputName.value, inputLink.value);
    formFromPopupMesto.reset();
    closePopup(popupMesto);
  });
  buttonPlus.addEventListener('click', () => {
    formFromPopupMesto.reset();
    validatingFormPopupMesto.clearError();
    validatingFormPopupMesto.disabledSubmitButton(buttonSubmit);
    openPopup(popupMesto);
  });

} //End of addEventListeners()
addEventListeners();





