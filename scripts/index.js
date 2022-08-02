const popupBlock = document.querySelector('.popup-profile');
const buttonEdit = document.querySelector('.profile__button-edit');
const closeIcon = document.querySelector('.popup__close-icon');
const formPopup = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const popupName = document.querySelector('.popup__input_type_name');
const profileJob = document.querySelector('.profile__busy');
const popupJob = document.querySelector('.popup__input_type_job');

function closePopupFirst() {
  popupBlock.className = 'popup';
}
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileJob.textContent = popupJob.value;
  closePopupFirst();
} 
function formEditHandler () {
  popupBlock.className = 'popup popup_opened'; 
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;
}

formPopup.addEventListener('submit', formSubmitHandler);
buttonEdit.addEventListener('click', formEditHandler);
closeIcon.addEventListener('click', closePopupFirst);




