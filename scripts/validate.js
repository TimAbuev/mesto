const formMesto = {
    form: '#form-mesto',

}


function enableValidation(selectors) {
    //1. найти форму в документе
    const form = document.querySelector(selectors.form)
    //2. установить слушатель сабмита
    form.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(event) {
    event.preventDefault();
    addCard(inputName.value, inputLink.value);

    //1. Опредеоить валидность формы
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    //2. Вывести алерт
    if (isValid) {
        alert('Форм валидна')
        //3. Если формв валидна, то сбросим её
        form.reset();
    }
    else {
        alert('Форм невалидна')
    }

    closePopup(popupMesto);
}

enableValidation(formMesto);



// formFromPopupMesto.addEventListener('submit', function(evt) {
//     evt.preventDefault();
    
    

//     // inputName.value = '';
//     // inputLink.value = '';
//   });