const selectors = {
  popup: '.popup',
  popupProfile: '.popup-profile',
  popupMesto: '.popup-mesto',
  popupImage: '.popup-image',
  closeButtons: '.popup__close-icon',
  buttonEdit: '.profile__button-edit',
    forms: '.popup__form',
  formFromPopupMesto: '.popup-mesto__form',
  formFromPopupProfile: '.popup-profile__form',
  inputName: '.popup-mesto__input_type_name',
  inputLink: '.popup-mesto__input_type_link',
  list: '.elements',
  buttonPlus: '.profile__button',
  template: '.template-card',
  divElementsCard: '.elements__card',
  elementsTitle: '.elements__title',
  elementsImage: '.elements__image',
  trashButton: '.elements__trash',
  wrapperButton: '.elements__button-wrapper',
  popopImageImage: '.popup-image__image',
  caption: '.popup-image__caption',
  like: '.elements__like',
  profileName: '.profile__name',
  profileJob: '.profile__busy',
  popupProfileInputName: '.popup__input_type_name',
  popupProfileInputJob: '.popup__input_type_job'
}

const popupProfileInputJob = document.querySelector(selectors.popupProfileInputJob);
const popupProfileInputName = document.querySelector(selectors.popupProfileInputName);
const profileJob = document.querySelector(selectors.profileJob);
const profileName = document.querySelector(selectors.profileName);
const popup = document.querySelector(selectors.popup);
const popupProfile = document.querySelector(selectors.popupProfile);
const popupImage = document.querySelector(selectors.popupImage);
const forms = document.querySelectorAll(selectors.forms);
const formFromPopupMesto = document.querySelector(selectors.formFromPopupMesto);
const formFromPopupProfile = document.querySelector(selectors.formFromPopupProfile);
const inputName = document.querySelector(selectors.inputName);
const inputLink = document.querySelector(selectors.inputLink);
const list = document.querySelector(selectors.list);
const buttonPlus = document.querySelector(selectors.buttonPlus);
const popupMesto = document.querySelector(selectors.popupMesto);
const closeButtons = document.querySelectorAll(selectors.closeButtons);
const popopImageImage = popupImage.querySelector(selectors.popopImageImage);
const caption = popupImage.querySelector(selectors.caption);
const buttonEdit = document.querySelector(selectors.buttonEdit);
const template = document.querySelector(selectors.template).content.querySelector(selectors.divElementsCard);


function closePopup(p1) {
  p1.classList.remove('popup_opened');
}
function openPopup(p1) {
  p1.classList.add('popup_opened');
}

function addEventListeners() {

  buttonPlus.addEventListener('click', function() {
    openPopup(popupMesto);
  })

  buttonEdit.addEventListener('click', function() {
    openPopup(popupProfile);
    popupProfileInputName.value = profileName.textContent;
    popupProfileInputJob.value = profileJob.textContent;
  });
  
  formFromPopupProfile.addEventListener('submit', function(evt) {
    evt.preventDefault();
    profileName.textContent = popupProfileInputName.value;
    profileJob.textContent = popupProfileInputJob.value;
    closePopup(popupProfile);
  });
  
  formFromPopupMesto.addEventListener('submit', function(evt) {
    evt.preventDefault();
    addNewCard(inputName.value, inputLink.value);
    closePopup(popupMesto);
  });
  
  closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
  });

}


addEventListeners();
createInitialCards();

