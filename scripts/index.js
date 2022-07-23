const popupBlock = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const closeIcon = document.querySelector('.popup__close-icon');
const formPopup = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const popupName = document.querySelector('.popup__input_type_name');
const profileJob = document.querySelector('.profile__busy');
const popupJob = document.querySelector('.popup__input_type_job');

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

formPopup.addEventListener('submit', formSubmitHandler);
buttonEdit.addEventListener('click', formEditHandler);
closeIcon.addEventListener('click', formCloseHandler);


