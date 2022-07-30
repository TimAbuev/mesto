const selectors = {
  form: '.popup-mesto__form',
  inputName: '.popup-mesto__input_type_name',
  inputLink: '.popup-mesto__input_type_link',
  list: '.elements',
  buttonPlus: '.profile__button',
  blockPopup: '.popup-mesto',
  buttonClose: '.popup-mesto__close-icon',
}

const form = document.querySelector(selectors.form);
const inputName = form.querySelector(selectors.inputName);
const inputLink = form.querySelector(selectors.inputLink);
const list = document.querySelector(selectors.list);
const buttonPlus = document.querySelector(selectors.buttonPlus);
const blockPopup = document.querySelector(selectors.blockPopup);
const buttonClose = document.querySelector(selectors.buttonClose);

function addCard(name, src) {
  const template = `    <div class="elements__card">
  <img src="${name.link}" alt="" class="elements__image">
  <button class="elements__trash"></button>
  <div class="elements__wrapper">
    <h2 class="elements__title">${name.name}</h2>
    <button class="elements__like" type="button"></button>
  </div>
</div>`;

  list.insertAdjacentHTML('afterbegin', template);
}
function addNewCard(name, src) {
  const template = `    <div class="elements__card">
  <img src="${src}" alt="" class="elements__image">
  <button class="elements__trash"></button>
  <div class="elements__wrapper">
    <h2 class="elements__title">${name}</h2>
    <button class="elements__like" type="button"></button>
  </div>
</div>`;

  list.insertAdjacentHTML('afterbegin', template);
}

function closePopup() {
  blockPopup.className = 'popup-mesto';
}

function addEventListeners() {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    addNewCard(inputName.value, inputLink.value);
    closePopup();
  })
  buttonPlus.addEventListener('click', function() {
    blockPopup.className = 'popup-mesto popup-mesto_opened';
  })
  buttonClose.addEventListener('click', function() {
    closePopup();
  })
}

function createInitialCards() {
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
  initialCards.forEach((item) => addCard(item));
}

addEventListeners();
createInitialCards();


