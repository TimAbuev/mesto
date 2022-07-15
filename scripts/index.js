const buttonEdit = document.querySelector('.profile__button-edit');
const popupBlock = document.querySelector('.popup');

buttonEdit.addEventListener('click', function(){
  popupBlock.className = 'popup popup_opened';
});

const closeIcon = document.querySelector('.popup__closeIcon');
closeIcon.addEventListener('click', function(){
  popupBlock.className = 'popup';
});


const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__busy');
const popupName = document.querySelector('.popup__name');
const popupJob = document.querySelector('.popup__working');

const buttonSave = document.querySelector('.popup__save');
buttonSave.addEventListener('click', function(){
  profileName.textContent = 's oshta';
  popupBlock.className = 'popup';
});


