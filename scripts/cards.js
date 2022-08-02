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
  like: '.elements__like',

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
  const elementsTitle = template.querySelector(selectors.elementsTitle);
  elementsTitle.textContent = p1.name;
  template.querySelector(selectors.elementsImage).setAttribute('src', p1.link);
  template.querySelector(selectors.elementsImage).setAttribute('alt', elementsTitle.textContent);

  template.querySelector(selectors.trashButton).addEventListener('click', function() {template.remove();})
  template.querySelector(selectors.wrapperButton).addEventListener('click', function() {
    blockPopupImage.className = 'popup-image popup-image_opened';
    popopImageImage.setAttribute('src', p1.link);
    caption.textContent = p1.name;
  });
  template.querySelector(selectors.like).addEventListener('click', function() {
    template.querySelector(selectors.like).classList.toggle('elements__like_active');
  });

  list.appendChild(template);
}

function addNewCard(name, src) {
  const template = document.querySelector(selectors.template).content.querySelector(selectors.divElementsCard).cloneNode(true);
  const  elementsTitle = template.querySelector(selectors.elementsTitle);
  elementsTitle.textContent = name;
  template.querySelector(selectors.elementsImage).setAttribute('src', src);
  template.querySelector(selectors.elementsImage).setAttribute('alt', elementsTitle.textContent);

  template.querySelector(selectors.trashButton).addEventListener('click', function() {template.remove();})
  template.querySelector(selectors.wrapperButton).addEventListener('click', function() {
    blockPopupImage.className = 'popup-image popup-image_opened';
    popopImageImage.setAttribute('src', src);
    caption.textContent = name;
  })
  template.querySelector(selectors.like).addEventListener('click', function() {
    template.querySelector(selectors.like).classList.toggle('elements__like_active');
  });

  list.insertBefore(template, list.firstChild);
}

// function closePopup(p1, p2) {
//   p1.className = 'popup-mesto';
//   p2.className = 'popup-image';
// }

function addEventListeners() {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    addNewCard(inputName.value, inputLink.value);
    closePopup(popup);
  })
  buttonPlus.addEventListener('click', function() {
    openPopup(popup);
  })
  buttonClose.addEventListener('click', function() {
    closePopup(popup);
  })
  buttonToCloseImg.addEventListener('click', function() {
    closePopup(popup);
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