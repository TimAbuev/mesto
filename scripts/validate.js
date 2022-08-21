function enableValidation(selectors) {
    const collectionForm = document.querySelectorAll(selectors.forms);
    collectionForm.forEach(function(currentValue) {
        currentValue.addEventListener('input', function(event) {
            handleFormInput(event, selectors)
        })
    }) 
}

function handleFormInput(event, selectors) {
    const input = event.target;
    const form = event.currentTarget;
    const button = form.querySelector(selectors.button);
    // 1. Установить кастомные тексты ошибок
    //setCustomError(input);
    // 2. Показать ошибки в контейнере под полем
    showFieldError(input, form);
    // 3. Включить ил отключить кнопку отправки формы
    setSubmitButtonState(form, selectors, button);
    // 4. Подсветить или отсветить инпут
    setInputState(input, selectors);
}

// function setCustomError(input) {
//     const validity = input.validity;

//     input.setCustomValidity('');
//     if (validity.tooShort) {
//         input.setCustomValidity('ВВод слишком короткий yaho ooooo ooooooo ooooooooo ooooooooooooooooooo oooooooo fffffffff ffffffffff ffffffffffff ffffffffff fffffffffffff ffffff');
//     }
//     if (validity.tooLong) {
//         input.setCustomValidity('ВВод слишком длиный');
//     }

// }

function showFieldError(input, form) {
    const span = form.querySelector(`.${input.id}-error`);
    span.textContent = input.validationMessage;
}


function disabledSubmitButton(button, selectors) {
    button.setAttribute('disabled', true);
    button.classList.add(selectors.invalidButtonClass);
}
function enableSubmitButton(button, selectors) {
    button.removeAttribute('disabled');
    button.classList.remove(selectors.invalidButtonClass);
}

function setSubmitButtonState(form, selectors, button) {
    const isValid = form.checkValidity();

    if (isValid) {
        enableSubmitButton(button, selectors);
    }
    else {
        disabledSubmitButton(button, selectors);
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


enableValidation({
    forms: '.popup__form',
    button: '.popup__save',
    inputError: 'popup__input_type_error',
    invalidButtonClass: 'popup__save_invalid',
    spanError: '.error',

});