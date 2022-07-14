const buttonEdit = document.querySelector('.profile__button-edit');

buttonEdit.addEventListener('click', function(){
  const popupBlock = document.querySelector('.popup');
  popupBlock.className = 'popup popup_opened';
});