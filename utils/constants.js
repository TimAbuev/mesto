export const formSettings = {
  forms: '.popup__form',
  button: '.popup__save',
  inputError: 'popup__input_type_error',
  invalidButtonClass: 'popup__save_invalid',
  spanError: '.error',
  input: '.popup__input',
};

export const selectors = {
  popup: '.popup',
  popupProfile: '.popup-profile',
  popupMesto: '.popup-mesto',
  popupImage: '.popup-image',
  closeButtons: '.popup__close-icon',
  buttonEdit: '.profile__button-edit',
  //forms: '.popup__form',
  formFromPopupProfile: '.popup__form_type_form-profile',
  inputName: '.popup__input_type_card-name',
  inputLink: '.popup__input_type_card-src',
  cardsContainer: '.elements',
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
  openedPopup: 'popup_opened',
  activePopup: '.popup_opened',
  likeActive: 'elements__like_active',
  formFromPopupMesto: '.popup__form_type_form-mesto',
  buttonSubmit: '.popup__save',
  invalidButtonClass: 'popup__save_invalid',
}

export const initialCards = [
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