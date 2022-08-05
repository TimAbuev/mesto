function createCard(name, imageSrc) {
  const newTemplate = template.cloneNode(true);
  const elementsTitle = newTemplate.querySelector(selectors.elementsTitle);
  elementsTitle.textContent = name;
  newTemplate.querySelector(selectors.elementsImage).setAttribute('src', imageSrc);
  newTemplate.querySelector(selectors.elementsImage).setAttribute('alt', name);
  newTemplate.querySelector(selectors.trashButton).addEventListener('click', function() {newTemplate.remove();})
  newTemplate.querySelector(selectors.wrapperButton).addEventListener('click', function() {
    openPopup(popupImage);
    popopImageImage.setAttribute('src', imageSrc);
    popopImageImage.setAttribute('alt', name);
    caption.textContent = name;
  });
  newTemplate.querySelector(selectors.like).addEventListener('click', function() {
    newTemplate.querySelector(selectors.like).classList.toggle('elements__like_active');
  });
  return newTemplate;
}

function addCard(name, link) {
  const newCard = createCard(name, link);
  list.prepend(newCard);
}

initialCards.forEach(function(item) {
  addCard(item.name, item.link);
})

addEventListeners();

