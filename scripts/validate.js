function enableValidation(selectors) {
    //1. найти форму в документе
    const form = document.querySelector(selectors.form)
    //2. установить слушатель сабмита
    form.addEventListener('submit', handleFormSubmit);

    //form.addEventListener('input', (event) => handleFormInput(event, selectors));
    form.addEventListener('input', function(event) {
        handleFormInput(event, selectors)
     });

}

function handleFormSubmit(event) {
    event.preventDefault();
    //1. Определить валидность формы
    const form = event.currentTarget;
    const isValid = form.checkValidity();

    if (isValid) {
        form.reset();
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
    // 4. Подсветить или отсветить инпут
    setInputState(input, selectors);
}

function setCustomError(input) {
    const validity = input.validity;

    input.setCustomValidity('');
    if (validity.tooShort) {
        input.setCustomValidity('ВВод слишком короткий yaho ooooo ooooooo ooooooooo ooooooooooooooooooo oooooooo fffffffff ffffffffff ffffffffffff ffffffffff fffffffffffff ffffff');
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
        button.classList.remove(selectors.invalidButtonClass);
    }
    else {
        button.setAttribute('disabled', true);
        button.classList.add(selectors.invalidButtonClass);
    }
    
}

function setInputState(input, selectors) {
    const isValid = input.checkValidity(); 
    // если строчка невалидная
    if (!isValid) {
        input.classList.add(selectors.inputError);
    }
    else {
        input.classList.remove(selectors.inputError);
    }
    
}


enableValidation(formMesto);
enableValidation(formPopupProfile);