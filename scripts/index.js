const selectors = {
  popup: '.popup',
  popupProfile: '.popup-profile',
  popupMesto: '.popup-mesto',
  popupImage: '.popup-image',
  closeButtons: '.popup__close-icon',
  buttonEdit: '.profile__button-edit',
    forms: '.popup__form',
  formFromPopupProfile: '.popup__form_type_form-profile',
  inputName: '.popup__input_type_card-name',
  inputLink: '.popup__input_type_card-src',
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
  popupProfileInputJob: '.popup__input_type_job',
  body: '.root',
  openedPopup: 'popup_opened',
  activePopup: '.popup_opened',
  likeActive: 'elements__like_active',

}
const formMesto = {
  form: '.popup__form_type_form-mesto',
  button: '.popup__save',
  inputError: 'popup__input_type_error',
  invalidButtonClass: 'popup__save_invalid',

}
const formPopupProfile = {
  form: '.popup__form_type_form-profile',
  button: '.popup__save',
  inputError: 'popup__input_type_error',
  invalidButtonClass: 'popup__save_invalid',
}

const body = document.querySelector(selectors.body);
const popupProfileInputJob = document.querySelector(selectors.popupProfileInputJob);
const popupProfileInputName = document.querySelector(selectors.popupProfileInputName);
const profileJob = document.querySelector(selectors.profileJob);
const profileName = document.querySelector(selectors.profileName);
const popup = document.querySelector(selectors.popup);
const popupProfile = document.querySelector(selectors.popupProfile);
const popupImage = document.querySelector(selectors.popupImage);
const forms = document.querySelectorAll(selectors.forms);
const formFromPopupMesto = document.querySelector(formMesto.form); 
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
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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

function addEventListeners() {
  buttonPlus.addEventListener('click', function() {
    openPopup(popupMesto);
  })
  buttonEdit.addEventListener('click', function() {
    openPopup(popupProfile);
    popupProfileInputName.value = profileName.textContent;
    popupProfileInputJob.value = profileJob.textContent;
  });
  formFromPopupProfile.addEventListener('submit', function() {
    profileName.textContent = popupProfileInputName.value;
    profileJob.textContent = popupProfileInputJob.value;
    closePopup(popupProfile);
  });
  formFromPopupMesto.addEventListener('submit', function() {
    addCard(inputName.value, inputLink.value);
    closePopup(popupMesto);
  }); 
  closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
  });
  body.addEventListener('mousedown', function(evt) {
    
      closePopup(evt.target);
      
  });
   
}






