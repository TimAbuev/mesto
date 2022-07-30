const profileButton = document.querySelector('.profile__button');
const popupMestoBlock = document.querySelector('.popup-mesto');
const closeIconMesto = document.querySelector('.popup-mesto__close-icon');
const buttonMestoSave = document.querySelector('.popup-mesto__save');
const elementsImage = document.querySelectorAll('.elements__image');
const elementsTitle = document.querySelectorAll('.elements__title');
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
const formMesto = document.querySelector('.popup-mesto__form');
const templateCardContent = document.querySelector('#template-card').content;
const templateCardContentClone = templateCardContent.querySelector('.elements__card').cloneNode(true);
const elements = document.querySelector('.elements');

//elements.prepend(templateCardContentClone);

 
function openFormMesto() {
    popupMestoBlock.className = 'popup-mesto popup-mesto_opened'; 
}
function closeFormMesto() {
    popupMestoBlock.className = 'popup-mesto';
}
//function addCard() {   }

function SubmitHandlerFormMesto(event) {
    event.preventDefault();
    elements.prepend(templateCardContentClone);


    closeFormMesto();
}
     
elementsTitle.forEach(function(item, index) { 
    item.textContent = initialCards[index].name;
  });
  elementsImage.forEach(function(item, index) {
    item.src = initialCards[index].link;
  });

formMesto.addEventListener('submit', SubmitHandlerFormMesto);
profileButton.addEventListener('click', openFormMesto);
closeIconMesto.addEventListener('click', closeFormMesto);
//buttonMestoSave.addEventListener('click', addCard);



