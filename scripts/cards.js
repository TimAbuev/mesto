class Card {
  constructor(data, template) {
    this._text = data.name;
    this._image = data.link;
    this._template = template;
  }
  _getElement() {
    const newTemplate = document.querySelector(this._template).cloneNode(true);
    return newTemplate;
    
    //const elementsTitle = newTemplate.querySelector(selectors.elementsTitle);
    //elementsTitle.textContent = name;
    //newTemplate.querySelector(selectors.elementsImage).setAttribute('src', imageSrc);
    //newTemplate.querySelector(selectors.elementsImage).setAttribute('alt', name);
    
  }
  _generate() {
    this._element = this._getElement();
    this._element.querySelector(selectors.elementsImage).setAttribute('src', this._image);
    this._element.querySelector(selectors.elementsImage).setAttribute('alt', this._text);
    const elementsTitle = this._element.querySelector(selectors.elementsTitle);
    elementsTitle.textContent = this._text;
  }
  _setEventListeners() {
    
  }
}

function createCard(name, imageSrc) {

  newTemplate.querySelector(selectors.trashButton).addEventListener('click', function() {newTemplate.remove();})
  newTemplate.querySelector(selectors.wrapperButton).addEventListener('click', function() {
    openPopup(popupImage);
    popopImageImage.setAttribute('src', imageSrc);
    popopImageImage.setAttribute('alt', name);
    caption.textContent = name;
  });
  newTemplate.querySelector(selectors.like).addEventListener('click', function() {
    newTemplate.querySelector(selectors.like).classList.toggle(selectors.likeActive);
  });
  return newTemplate;
}


function addCard(name, link) {
  const newCard = createCard(name, link);
  cardsContainer.prepend(newCard);
}

initialCards.forEach(function(item) {
  addCard(item.name, item.link);
})

addEventListeners();



