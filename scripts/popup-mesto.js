const selectors = {
  form: '.popup-mesto__form',
  inputName: '.popup-mesto__input_type_name',
  inputLink: '.popup-mesto__input_type_link',
  list: '.elements',
  buttonPlus: '.profile__button',
  blockPopup: '.popup-mesto',
  buttonClose: '.popup-mesto__close-icon',
  template: '.template-card',
  divElementsCard: '.elements__card',
  elementsTitle: '.elements__title',
  elementsImage: '.elements__image',
  trashButton: '.elements__trash',

}
const form = document.querySelector(selectors.form);
const inputName = form.querySelector(selectors.inputName);
const inputLink = form.querySelector(selectors.inputLink);
const list = document.querySelector(selectors.list);
const buttonPlus = document.querySelector(selectors.buttonPlus);
const blockPopup = document.querySelector(selectors.blockPopup);
const buttonClose = document.querySelector(selectors.buttonClose);

function addCard(p1) {
  const template = document.querySelector(selectors.template).content.querySelector(selectors.divElementsCard).cloneNode(true);
  template.querySelector(selectors.elementsTitle).textContent = p1.name;
  template.querySelector(selectors.elementsImage).setAttribute('src', p1.link);

  template.querySelector(selectors.trashButton).addEventListener('click', function() {template.remove();})

  list.appendChild(template);
}

function addNewCard(name, src) {
  const template = document.querySelector(selectors.template).content.querySelector(selectors.divElementsCard).cloneNode(true);
  template.querySelector(selectors.elementsTitle).textContent = name;
  template.querySelector(selectors.elementsImage).setAttribute('src', src);

  template.querySelector(selectors.trashButton).addEventListener('click', function() {template.remove();})

  list.appendChild(template);
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