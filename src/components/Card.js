export default class Card {
  constructor({ handleClickTrash, handleCardClick, userId}, data, template, selectors) {
    this._text = data.name;
    this._image = data.link;
    this._template = template;
    this._selectors = selectors;
    this._openPopupImage = handleCardClick;
    this._handleClickTrash = handleClickTrash;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
  }
  _getElement() {
    const newTemplate = document.querySelector(this._template).content.
      querySelector(this._selectors.divElementsCard)
      .cloneNode(true);
    return newTemplate;
  }
  generate() {
    this._element = this._getElement();
    this._trashButton = this._element.querySelector(this._selectors.trashButton);
    this._like = this._element.querySelector(this._selectors.like);
    this._counter = this._element.querySelector(this._selectors.counter)
    this._counter.textContent = this._likes.length;
    this._elementsImage = this._element.querySelector(this._selectors.elementsImage);
    this._setEventListeners();
    this._elementsImage.setAttribute('src', this._image);
    this._elementsImage.setAttribute('alt', this._text);
    const elementsTitle = this._element.querySelector(this._selectors.elementsTitle);
    elementsTitle.textContent = this._text;
    return this._element;
  }
  _setEventListeners() {

    this._trashButton.addEventListener('click', () => {
      this._handleClickTrash(this._id);
    });

    if (this._userId !== this._ownerId) {
      this._trashButton.style.display = 'none';
    }

    this._element.querySelector(this._selectors.wrapperButton).addEventListener('click', () => {
      this._openPopupImage(this._text, this._image);
    });

    this._like.addEventListener('click', () => {
      this._handleClickLike();
    });
  }//END OF _setEventListeners

  _handleClickLike() {
    this._like.classList.toggle(this._selectors.likeActive);
  }

  removeElement = () => {
    this._element.remove();
  }

}