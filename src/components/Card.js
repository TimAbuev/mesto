export default class Card {
  constructor({ handleClickTrash, handleCardClick, handleClickLike, userId}, data, template, selectors) {
    this._text = data.name;
    this._image = data.link;
    this._template = template;
    this._selectors = selectors;
    this._openPopupImage = handleCardClick;
    this._handleClickTrash = handleClickTrash;
    this._likes = data.likes;
    this._idCard = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._handleClickLike = handleClickLike;
    this._element = this._getElement();
    this._counter = this._element.querySelector(this._selectors.counter);
    this._trashButton = this._element.querySelector(this._selectors.trashButton);
    this._like = this._element.querySelector(this._selectors.like);
    this._elementsImage = this._element.querySelector(this._selectors.elementsImage);
    this._elementsTitle = this._element.querySelector(this._selectors.elementsTitle);
  }
  _getElement() {
    const newTemplate = document.querySelector(this._template).content.
      querySelector(this._selectors.divElementsCard)
      .cloneNode(true);
    return newTemplate;
  }
  generate() {
    this._setEventListeners();
    this._elementsImage.setAttribute('src', this._image);
    this._elementsImage.setAttribute('alt', this._text);
    this._elementsTitle.textContent = this._text;

    if (this._userId !== this._ownerId) {
      this._trashButton.style.display = 'none';
    }

    this.setLike(this._likes);    

    return this._element;
  }
  
  _setEventListeners() {
    this._trashButton.addEventListener('click', () => {
      this._handleClickTrash(this._idCard);
    });
    this._element.querySelector(this._selectors.wrapperButton).addEventListener('click', () => {
      this._openPopupImage(this._text, this._image);
    });
    this._like.addEventListener('click', () => {
      this._handleClickLike(this._idCard);
    });
  }

  isLiked() {
    const userHasLikedCard = this._likes.find(us => us._id === this._userId);
    return userHasLikedCard;
  }

  setLike(likes) {
    this._likes = likes;
    this._counter.textContent = this._likes.length;

    if(this.isLiked()) {
      this._fillLike();
    }
    else {
      this._unFillLike();
    }
  }
  
  _fillLike() {
    this._like.classList.add(this._selectors.likeActive);
  }
  _unFillLike() {
    this._like.classList.remove(this._selectors.likeActive);
  }

  removeElement = () => {
    this._element.remove();
  }

}