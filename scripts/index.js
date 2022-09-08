import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { formSettings, selectors, initialCards } from "./constants.js";

//console.log(selectors);

//const divElementsCard = document.querySelector(selectors.divElementsCard);
const popupProfileInputJob = document.querySelector(selectors.popupProfileInputJob);
const popupProfileInputName = document.querySelector(selectors.popupProfileInputName);
const profileJob = document.querySelector(selectors.profileJob);
const profileName = document.querySelector(selectors.profileName);
const popup = document.querySelector(selectors.popup);
const popupProfile = document.querySelector(selectors.popupProfile);
export const popupImage = document.querySelector(selectors.popupImage);
//const forms = document.querySelectorAll(selectors.forms);
const formFromPopupMesto = document.querySelector(selectors.formFromPopupMesto); 
const buttonSubmit = formFromPopupMesto.querySelector(selectors.buttonSubmit);
const formFromPopupProfile = document.querySelector(selectors.formFromPopupProfile);
const inputName = document.querySelector(selectors.inputName);
const inputLink = document.querySelector(selectors.inputLink);
const cardsContainer = document.querySelector(selectors.cardsContainer);
const buttonPlus = document.querySelector(selectors.buttonPlus);
const popupMesto = document.querySelector(selectors.popupMesto);
const closeButtons = document.querySelectorAll(selectors.closeButtons);
const popopImageImage = popupImage.querySelector(selectors.popopImageImage);
const caption = popupImage.querySelector(selectors.caption);
const buttonEdit = document.querySelector(selectors.buttonEdit);
const template = document.querySelector(selectors.template).content.querySelector(selectors.divElementsCard);

//console.log(selectors.divElementsCard);
function addCard(name, link) {
  const newCard = createCard(name, link);
  cardsContainer.prepend(newCard);
}
function createCard(name, link) {
  const card = new Card({name, link}, '.template-card');
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
  const card = new Card(item, '.template-card', selectors);
  const cardElement = card.generate(item.name, item.link);
  //console.log(cardElement);
  cardsContainer.append(cardElement);
})

const validatingFormPopupMesto = new FormValidator(formSettings, formFromPopupMesto);
validatingFormPopupMesto.enableValidation();
const validatingFormPopupProfile = new FormValidator(formSettings, formFromPopupProfile);
validatingFormPopupProfile.enableValidation();

