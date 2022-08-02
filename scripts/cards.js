function addCard(p1) {
  const newTemplate = template.cloneNode(true);
  const elementsTitle = newTemplate.querySelector(selectors.elementsTitle);
  elementsTitle.textContent = p1.name;
  newTemplate.querySelector(selectors.elementsImage).setAttribute('src', p1.link);
  newTemplate.querySelector(selectors.elementsImage).setAttribute('alt', elementsTitle.textContent);

  newTemplate.querySelector(selectors.trashButton).addEventListener('click', function() {template.remove();})
  newTemplate.querySelector(selectors.wrapperButton).addEventListener('click', function() {
    popupImage.className = 'popup-image popup-image_opened';
    popopImageImage.setAttribute('src', p1.link);
    caption.textContent = p1.name;
  });
  newTemplate.querySelector(selectors.like).addEventListener('click', function() {
    newTemplate.querySelector(selectors.like).classList.toggle('elements__like_active');
  });

  list.appendChild(newTemplate);
}

function addNewCard(name, src) {
  const newTemplate = template.cloneNode(true);
  const  elementsTitle = newTemplate.querySelector(selectors.elementsTitle);
  elementsTitle.textContent = name;
  newTemplate.querySelector(selectors.elementsImage).setAttribute('src', src);
  newTemplate.querySelector(selectors.elementsImage).setAttribute('alt', elementsTitle.textContent);

  newTemplate.querySelector(selectors.trashButton).addEventListener('click', function() {newTemplate.remove();})
  newTemplate.querySelector(selectors.wrapperButton).addEventListener('click', function() {
    popupImage.className = 'popup-image popup-image_opened';
    popopImageImage.setAttribute('src', src);
    caption.textContent = name;
  })
  newTemplate.querySelector(selectors.like).addEventListener('click', function() {
    newTemplate.querySelector(selectors.like).classList.toggle('elements__like_active');
  });

  list.insertBefore(newTemplate, list.firstChild);
}

function addEventListeners() {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    addNewCard(inputName.value, inputLink.value);
    closePopup(popup);
  })
  buttonPlus.addEventListener('click', function() {
    openPopup(popupMesto);
  })
  buttonClose.addEventListener('click', function() {
    console.log('hey');
    //closePopup(popup);
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