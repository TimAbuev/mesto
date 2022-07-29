const popupBlock = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const closeIcon = document.querySelector('.popup__close-icon');
const formPopup = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const popupName = document.querySelector('.popup__input_type_name');
const profileJob = document.querySelector('.profile__busy');
const popupJob = document.querySelector('.popup__input_type_job');
const elementsImage = document.querySelectorAll('.elements__image');
const elementsTitle = document.querySelectorAll('.elements__title');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function closePopup() {
  popupBlock.className = 'popup';
}
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileJob.textContent = popupJob.value;
  closePopup();
} 
function formEditHandler () {
  popupBlock.className = 'popup popup_opened'; 
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;
}

formPopup.addEventListener('submit', formSubmitHandler);
buttonEdit.addEventListener('click', formEditHandler);
closeIcon.addEventListener('click', closePopup);

elementsTitle.forEach(function(item, index) { 
  item.textContent = initialCards[index].name;
});
elementsImage.forEach(function(item, index) {
  item.src = initialCards[index].link;
});
