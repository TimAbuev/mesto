const buttonEdit = document.querySelector('.profile__button-edit');
const popupBlock = document.querySelector('.popup');

buttonEdit.addEventListener('click', function(){
  popupBlock.className = 'popup popup_opened';
});

const closeIcon = document.querySelector('.popup__closeIcon');
closeIcon.addEventListener('click', function(){
  popupBlock.className = 'popup';
});

