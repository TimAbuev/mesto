function createCard(item) {
    console.log('hi');

    const newTemplate = template.cloneNode(true);
    const elementsTitle = newTemplate.querySelector(selectors.elementsTitle);
    elementsTitle.textContent = p1.name;
    newTemplate.querySelector(selectors.elementsImage).setAttribute('src', p1.link);
    newTemplate.querySelector(selectors.elementsImage).setAttribute('alt', 'имя картинки вставлять');
  
    newTemplate.querySelector(selectors.trashButton).addEventListener('click', function() {newTemplate.remove();})
    newTemplate.querySelector(selectors.wrapperButton).addEventListener('click', function() {
      openPopup(popupImage);
      popopImageImage.setAttribute('src', p1.link);
      caption.textContent = p1.name;
    });
    newTemplate.querySelector(selectors.like).addEventListener('click', function() {
      newTemplate.querySelector(selectors.like).classList.toggle('elements__like_active');
    });
  
    list.appendChild(newTemplate);

}


createCard();