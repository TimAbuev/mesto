const formMesto = {
    form: '#form-mesto',
    button: '.popup__save',

}


function enableValidation(selectors) {
    //1. найти форму в документе
    const form = document.querySelector(selectors.form)
    //2. установить слушатель сабмита
    form.addEventListener('submit', handleFormSubmit);
    form.addEventListener('input', (event) => handleFormInput(event, selectors));

}

function handleFormSubmit(event) {
    event.preventDefault();
    addCard(inputName.value, inputLink.value);

    //1. Опредеоить валидность формы
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    //2. Вывести алерт
    if (isValid) {
        alert('Форм валидна');
        //3. Если формв валидна, то сбросим её
        form.reset();
    }
    else {
        alert('Форм невалидна')
    }

    closePopup(popupMesto);
}

function handleFormInput(event, selectors) {
    const input = event.target;
    const form = event.currentTarget;

    // 1. Установить кастомные тексты ошибок
    //setCustomError(input);
    // 2. Показать ошибки в контейнере под полем
    showFieldError(input);
    // 3. Включить ил отключить кнопку отправки формы
    setSubmitButtonState(form, selectors);
    // 44444. Подсветить или отсветить инпут
    setInputState(input);
}

function setCustomError(input) {
    const validity = input.validity;

    input.setCustomValidity('');
    if (validity.tooShort) {
        input.setCustomValidity('ВВод слишком короткий');
    }
    if (validity.tooLong) {
        input.setCustomValidity('ВВод слишком длиный');
    }

}

function showFieldError(input) {
    const span = input.nextElementSibling;
    span.textContent = input.validationMessage;
}

function setSubmitButtonState(form, selectors) {
    const button = form.querySelector(selectors.button);
    const isValid = form.checkValidity();

    if (isValid) {
        button.removeAttribute('disabled');
        button.classList.remove('popup__save_invalid');
    }
    else {
        button.setAttribute('disabled', true);
        button.classList.add('popup__save_invalid');
    }
    
     
}

function setInputState(input) {
    const isValid = input.checkValidity(); 
    // если строчка невалидная
    if (!isValid) {
        input.classList.add('popup__input_type_error');
    }
    else {
        input.classList.remove('popup__input_type_error');
    }
}


enableValidation(formMesto);
















// formFromPopupMesto.addEventListener('submit', function(evt) {
//     evt.preventDefault();
    
    

//     // inputName.value = '';
//     // inputLink.value = '';
//   });