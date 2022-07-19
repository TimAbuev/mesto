const popupBlock = document.querySelector('.popup');

const buttonEdit = document.querySelector('.profile__button-edit');
buttonEdit.addEventListener('click', function(){
  popupBlock.className = 'popup popup_opened';  
});

const closeIcon = document.querySelector('.popup__closeIcon');
closeIcon.addEventListener('click', function(){
  popupBlock.className = 'popup';
});


const formPopup = document.querySelector('.popup__form');
function formSubmitHandler (evt) {
  evt.preventDefault();

  const popupName = document.querySelector('.popup__name');
  let popupNameValue = popupName.value;
  const profileName = document.querySelector('.profile__name');
  profileName.textContent = popupNameValue;

  const popupJob = document.querySelector('.popup__working');
  let popupJobValue = popupJob.value;
  const profileJob = document.querySelector('.profile__busy');
  profileJob.textContent = popupJobValue;

  popupBlock.className = 'popup';
}
formPopup.addEventListener('submit', formSubmitHandler);
