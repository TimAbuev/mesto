import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { formSettings, selectors, initialCards } from "./constants.js";

//const popup = document.querySelector(selectors.popup);
const buttonPlus = document.querySelector(selectors.buttonPlus);
const cardsContainer = document.querySelector(selectors.cardsContainer);
const popupProfileInputJob = document.querySelector(selectors.popupProfileInputJob);
const popupProfileInputName = document.querySelector(selectors.popupProfileInputName);
const profileJob = document.querySelector(selectors.profileJob);
const profileName = document.querySelector(selectors.profileName);
const popupProfile = document.querySelector(selectors.popupProfile);
import { popupImage } from "./constants.js";
import { popopImageImage } from "./constants.js";
import { caption } from "./constants.js";
const formFromPopupMesto = document.querySelector(selectors.formFromPopupMesto);
const formFromPopupProfile = document.querySelector(selectors.formFromPopupProfile);
const inputName = document.querySelector(selectors.inputName);
const inputLink = document.querySelector(selectors.inputLink);
const popupMesto = document.querySelector(selectors.popupMesto);
const closeButtons = document.querySelectorAll(selectors.closeButtons);
const buttonEdit = document.querySelector(selectors.buttonEdit);

function addCard(name, link) {
  const newCard = createCard(name, link);
  cardsContainer.prepend(newCard);
}
function createCard(name, link) {
  const card = new Card({name, link}, '.template-card', selectors, openPopupImage);
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
  //document.addEventListener('keyup', handleEscUp);
}

function openPopupImage(name, link, textCaption) {
  console.log(popopImageImage);
  console.log(selectors.popopImageImage);
  openPopup(popupImage);
  popopImageImage.setAttribute('src', link);
  popopImageImage.setAttribute('alt', name);
  caption.textContent = textCaption;
}

function closePopupByOverlay(popup) {
  popup.addEventListener('mousedown', function(evt) {
    if(evt.target.classList.contains(selectors.openedPopup)) {
      closePopup(evt.target);
    } 
  })
}
closePopupByOverlay(popupProfile);
closePopupByOverlay(popupMesto);
closePopupByOverlay(popupImage);

function addEventListeners() {

  buttonEdit.addEventListener('click', function() {
    openPopup(popupProfile);
    popupProfileInputName.value = profileName.textContent;
    popupProfileInputJob.value = profileJob.textContent;
  });
  formFromPopupProfile.addEventListener('submit', function(event) { 
    event.preventDefault();     
    profileName.textContent = popupProfileInputName.value;
    profileJob.textContent = popupProfileInputJob.value;
    closePopup(popupProfile);
  });
  formFromPopupMesto.addEventListener('submit', function(event) {
    event.preventDefault();
    addCard(inputName.value, inputLink.value);
    formFromPopupMesto.reset();
    closePopup(popupMesto);
  }); 
  closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
  });
  buttonPlus.addEventListener('click', () => {
    //disabledSubmitButton();
    openPopup(popupMesto);
})

} //End of addEventListeners()
addEventListeners();

initialCards.forEach((item) => {
  const card = new Card(item, '.template-card', selectors, openPopupImage);
  const cardElement = card.generate(item.name, item.link);
  cardsContainer.append(cardElement);
})

const validatingFormPopupMesto = new FormValidator(formSettings, formFromPopupMesto);
validatingFormPopupMesto.enableValidation();
const validatingFormPopupProfile = new FormValidator(formSettings, formFromPopupProfile);
validatingFormPopupProfile.enableValidation();

