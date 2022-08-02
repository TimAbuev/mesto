const popup = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const closeIcon = document.querySelector('.popup__close-icon');
const formPopup = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const popupProfileInputName = document.querySelector('.popup__input_type_name');
const profileJob = document.querySelector('.profile__busy');
const popupProfileInputJob = document.querySelector('.popup__input_type_job');

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
closeIcon.addEventListener('click', () => closePopup(popup));





