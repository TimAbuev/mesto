class Card {
  constructor(data, template) {
    this._text = data.name;
    this._image = data.link;
    this._template = template;
  
  }
  _getElement() {
    const newTemplate = document.querySelector(this._template).content.
    querySelector(selectors.divElementsCard)
    .cloneNode(true);
    return newTemplate;
  }
  generate() {
    this._element = this._getElement();
    this._setEventListeners();
    this._element.querySelector(selectors.elementsImage).setAttribute('src', this._image);
    this._element.querySelector(selectors.elementsImage).setAttribute('alt', this._text);
    const elementsTitle = this._element.querySelector(selectors.elementsTitle);
    elementsTitle.textContent = this._text;
    return this._element;
  }
  _setEventListeners() {
    this._element.querySelector(selectors.trashButton).addEventListener('click', this._removeElement);
    this._element.querySelector(selectors.wrapperButton).addEventListener('click', () => {
      openPopup(popupImage);
      popopImageImage.setAttribute('src', this._image);
      popopImageImage.setAttribute('alt', this._text);
      caption.textContent = this._text;
    });
    this._element.querySelector(selectors.like).addEventListener('click', () => {
      this._handleClickLike();
    });
  }
  _handleClickLike () {
    this._element.querySelector(selectors.like).classList.toggle(selectors.likeActive);
  }
  _removeElement = () => {
    this._element.remove();
  } 
}

function addCard(name, link) {
  const newCard = createCard(name, link);
  cardsContainer.prepend(newCard);
}

function createCard(name, link) {
  const card = new Card({name, link}, '.template-card');
  return card.generate();
}



initialCards.forEach((item) => {
  const card = new Card(item, '.template-card');
  const cardElement = card.generate(item.name, item.link);
  //console.log(cardElement);
  cardsContainer.append(cardElement);
})

addEventListeners();
