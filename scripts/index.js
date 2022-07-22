const popupBlock = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const closeIcon = document.querySelector('.popup__closeIcon');
const formPopup = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const popupName = document.querySelector('.popup__name');
const profileJob = document.querySelector('.profile__busy');
const popupJob = document.querySelector('.popup__working');

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileJob.textContent = popupJob.value;
  popupBlock.className = 'popup';
}
function formEditHandler () {
  popupBlock.className = 'popup popup_opened'; 
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;
}
function formCloseHandler () {
  popupBlock.className = 'popup';
}

closeIcon.addEventListener('click', formCloseHandler);
formPopup.addEventListener('submit', formSubmitHandler);
buttonEdit.addEventListener('click', formEditHandler);
