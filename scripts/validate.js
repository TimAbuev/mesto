class FormValidator {
    constructor(settings, form) {
       this._form = form;
       this._invalidButtonClass = settings.invalidButtonClass;
       this._inputError = settings.inputError;
    }
    // enableValidation(selectors) {
    //     const collectionForm = document.querySelectorAll(this._forms);
    //     collectionForm.forEach(function(currentValue) {
    //         currentValue.addEventListener('input', function(event) {
    //             handleFormInput(event, selectors)
    //         })
    //     }) 
    // }
    enableValidation() {
        this._form.addEventListener('input', function(event) {
            handleFormInput(event);
        })
    }
    // function handleFormInput(event, selectors) {
    //     const input = event.target;
    //     const form = event.currentTarget;
    //     const button = form.querySelector(selectors.button);
    //     // 1. Установить кастомные тексты ошибок
    //     //setCustomError(input);
    //     // 2. Показать ошибки в контейнере под полем
    //     showFieldError(input, form);
    //     // 3. Включить ил отключить кнопку отправки формы
    //     setSubmitButtonState(form, selectors, button);
    //     // 4. Подсветить или отсветить инпут
    //     setInputState(input, selectors);
    // }
    _handleFormInput(event) {
        const input = event.target;
        const form = event.currentTarget;
        const button = form.querySelector(this._settings.button);
            // 1. Установить кастомные тексты ошибок
        //_setCustomError(input);
            // 2. Показать ошибки в контейнере под полем
        _showFieldError(input, form);
            // 3. Включить ил отключить кнопку отправки формы
        _setSubmitButtonState(form, button);
            // 4. Подсветить или отсветить инпут
        _setInputState(input);
    }
    // function showFieldError(input, form) {
    //     const span = form.querySelector(`.${input.id}-error`);
    //     span.textContent = input.validationMessage;
    // }
    _showFieldError(input, form) {
        const span = form.querySelector(`.${input.id}-error`);
        span.textContent = input.validationMessage;
    }
    // function setSubmitButtonState(form, selectors, button) {
    //     const isValid = form.checkValidity();
    
    //     if (isValid) {
    //         enableSubmitButton(button, selectors);
    //     }
    //     else {
    //         disabledSubmitButton(button, selectors);
    //     }
        
    // }
    _setSubmitButtonState(form, button) {
        const isValid = form.checkValidity();
    
        if (isValid) {
            _enableSubmitButton(button);
        }
        else {
            _disabledSubmitButton(button);
        }       
    }
    // function disabledSubmitButton(button, selectors) {
    //     button.setAttribute('disabled', true);
    //     button.classList.add(selectors.invalidButtonClass);
    // }
    _disabledSubmitButton(button) {
        button.setAttribute('disabled', true);
        button.classList.add(this._invalidButtonClass);
    }
    // function enableSubmitButton(button, selectors) {
    //     button.removeAttribute('disabled');
    //     button.classList.remove(selectors.invalidButtonClass);
    // }
    _enableSubmitButton(button) {
        button.removeAttribute('disabled');
        button.classList.remove(this._invalidButtonClass);
    }
    // function setInputState(input, selectors) {
    //     const isValid = input.checkValidity(); 
    //     // если строчка невалидная
    //     if (!isValid) {
    //         input.classList.add(selectors.inputError);
    //     }
    //     else {
    //         input.classList.remove(selectors.inputError);
    //     }
    
    // }  
    _setInputState(input) {
        const isValid = input.checkValidity(); 
        // если строчка невалидная
        if (!isValid) {
            input.classList.add(this._inputError);
        }
        else {
            input.classList.remove(this._inputError);
        }
    
    }
    // _setCustomError(input) {
    //     const validity = input.validity;
    
    //     input.setCustomValidity('');
    //     if (validity.tooShort) {
    //         input.setCustomValidity('ВВод слишком короткий yaho ooooo ooooooo ooooooooo ooooooooooooooooooo oooooooo fffffffff ffffffffff ffffffffffff ffffffffff fffffffffffff ffffff');
    //     }
    //     if (validity.tooLong) {
    //         input.setCustomValidity('ВВод слишком длиный');
    //     }
    
    // }

} //end of class FormValidator

const validatingFormPopupMesto = new FormValidator(formSettings, formFromPopupMesto);
const formSettings = {
    forms: '.popup__form',
    button: '.popup__save',
    inputError: 'popup__input_type_error',
    invalidButtonClass: 'popup__save_invalid',
    spanError: '.error',
};

