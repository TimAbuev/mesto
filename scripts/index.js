const selectors = {
  popup: '.popup',
  popupProfile: '.popup-profile',
  popupMesto: '.popup-mesto',
  popupImage: '.popup-image',
  buttonClose: '.popup__close-icon',
  buttonEdit: '.profile__button-edit',
  form: '.popup-mesto__form',
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
}

const formPopup = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const popupProfileInputName = document.querySelector('.popup__input_type_name');
const profileJob = document.querySelector('.profile__busy');
const popupProfileInputJob = document.querySelector('.popup__input_type_job');

const popup = document.querySelector(selectors.popup);
const popupProfile = document.querySelector(selectors.popupProfile);
const popupImage = document.querySelector(selectors.popupImage);
const form = document.querySelector(selectors.form);
const inputName = form.querySelector(selectors.inputName);
const inputLink = form.querySelector(selectors.inputLink);
const list = document.querySelector(selectors.list);
const buttonPlus = document.querySelector(selectors.buttonPlus);
const popupMesto = document.querySelector(selectors.popupMesto);
const buttonClose = document.querySelector(selectors.buttonClose);
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
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = popupProfileInputName.value;
  profileJob.textContent = popupProfileInputJob.value;
  closePopup(popup);
} 
function EditProfileForm () {
  openPopup(popup);
  popupProfileInputName.value = profileName.textContent;
  popupProfileInputJob.value = profileJob.textContent;
}

buttonEdit.addEventListener('click', EditProfileForm);
formPopup.addEventListener('submit', handleProfileFormSubmit);
//buttonClose.addEventListener('click', () => closePopup(popup));





