const popupBlock = document.querySelector('.popup');
const profileJob = document.querySelector('.profile__busy');
const profileName = document.querySelector('.profile__name');

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
  popupBlock.className = 'popup';

  const popupName = document.querySelector('.popup__name');
  let popupNameValue = popupName.getAttribute('value');
  let popupNewName = popupName.setAttribute('value', 'test');

  console.log(popupNewName);
  console.log(popupNameValue);

  profileName.textContent = popupNameValue;

}
formPopup.addEventListener('submit', formSubmitHandler);

