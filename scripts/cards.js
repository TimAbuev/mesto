class Card {
  constructor(data, template) {
    this._text = data.name;
    this._image = data.link;
    this._template = template;

  }
  _getElement() {
    const newTemplate = document.querySelector(this._template).content.cloneNode(true);
    return newTemplate;
  }
  generate(name, link) {
    this._element = this._getElement();
    this._setEventListeners();
    this._element.querySelector(selectors.elementsImage).setAttribute('src', link);
    this._element.querySelector(selectors.elementsImage).setAttribute('alt', name);
    const elementsTitle = this._element.querySelector(selectors.elementsTitle);
    elementsTitle.textContent = this._text;
    return this._element;
  }
  _setEventListeners() {
    this._element.querySelector(selectors.trashButton).addEventListener('click', () => { this._element.remove(); })
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
  _handleClickLike() {
    this._element.querySelector(selectors.like).classList.toggle(selectors.likeActive);
  }
}

function addCard(name, link) {
  const newCard = generate(name, link);
  cardsContainer.prepend(newCard);
}

initialCards.forEach((item) => {
  const card = new Card(item, '.template-card');
  const cardElement = card.generate(item.name, item.link);
  //console.log(cardElement);
  cardsContainer.append(cardElement);
})

addEventListeners();
