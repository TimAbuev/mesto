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
  wrapperButton: '.elements__button-wrapper',
  blockPopupImage: '.popup-image',
  buttonToCloseImg: '.popup-image__close-icon',
  popopImageImage: '.popup-image__image',
  caption: '.popup-image__caption',

}
const form = document.querySelector(selectors.form);
const inputName = form.querySelector(selectors.inputName);
const inputLink = form.querySelector(selectors.inputLink);
const list = document.querySelector(selectors.list);
const buttonPlus = document.querySelector(selectors.buttonPlus);
const blockPopup = document.querySelector(selectors.blockPopup);
const buttonClose = document.querySelector(selectors.buttonClose);
const blockPopupImage = document.querySelector(selectors.blockPopupImage);
const buttonToCloseImg = blockPopupImage.querySelector(selectors.buttonToCloseImg);
const popopImageImage = blockPopupImage.querySelector(selectors.popopImageImage);
const caption = blockPopupImage.querySelector(selectors.caption);

function addCard(p1) {
  const template = document.querySelector(selectors.template).content.querySelector(selectors.divElementsCard).cloneNode(true);
  template.querySelector(selectors.elementsTitle).textContent = p1.name;
  template.querySelector(selectors.elementsImage).setAttribute('src', p1.link);

  template.querySelector(selectors.trashButton).addEventListener('click', function() {template.remove();})
  template.querySelector(selectors.wrapperButton).addEventListener('click', function() {
    blockPopupImage.className = 'popup-image popup-image_opened';
    popopImageImage.setAttribute('src', p1.link);
    caption.textContent = p1.name;
  });

  list.appendChild(template);
}

function addNewCard(name, src) {
  const template = document.querySelector(selectors.template).content.querySelector(selectors.divElementsCard).cloneNode(true);
  template.querySelector(selectors.elementsTitle).textContent = name;
  template.querySelector(selectors.elementsImage).setAttribute('src', src);

  template.querySelector(selectors.trashButton).addEventListener('click', function() {template.remove();})
  template.querySelector(selectors.wrapperButton).addEventListener('click', function() {
    blockPopupImage.className = 'popup-image popup-image_opened';
    popopImageImage.setAttribute('src', src);
    caption.textContent = name;
  })

  list.appendChild(template);
}

function closePopup(p1, p2) {
  p1.className = 'popup-mesto';
  p2.className = 'popup-image';
}

function addEventListeners() {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    addNewCard(inputName.value, inputLink.value);
    closePopup(blockPopup, blockPopupImage);
  })
  buttonPlus.addEventListener('click', function() {
    blockPopup.className = 'popup-mesto popup-mesto_opened';
  })
  buttonClose.addEventListener('click', function() {
    closePopup(blockPopup, blockPopupImage);
  })
  buttonToCloseImg.addEventListener('click', function() {
    closePopup(blockPopup, blockPopupImage);
  });

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