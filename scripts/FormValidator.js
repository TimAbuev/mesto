//import {formSettings} from "./constants.js"
export default class FormValidator {
    constructor(settings, form) {
        this._settings = settings;
        this._form = form;
        this._invalidButtonClass = settings.invalidButtonClass;
        this._inputError = settings.inputError;
    }
    enableValidation() {
        this._form.addEventListener('input', (event) => {
            this._handleFormInput(event);
        })
    }
    _handleFormInput(event) {
        const input = event.target;
        const form = event.currentTarget;
        const button = form.querySelector(this._settings.button);
        // 1. Установить кастомные тексты ошибок
        //_setCustomError(input);
        // 2. Показать ошибки в контейнере под полем
        this._showFieldError(input, form);
        // 3. Включить ил отключить кнопку отправки формы
        this._setSubmitButtonState(form, button);
        // 4. Подсветить или отсветить инпут
        this._setInputState(input);
    }
    _showFieldError(input, form) {
        const span = form.querySelector(`.${input.id}-error`);
        span.textContent = input.validationMessage;
    }
    _setSubmitButtonState(form, button) {
        const isValid = form.checkValidity();

        if (isValid) {
            this._enableSubmitButton(button);
        }
        else {
            this.disabledSubmitButton(button);
        }
    }
    disabledSubmitButton(button) {
        console.log(button);
        button.setAttribute('disabled', true);
        button.classList.add(this._invalidButtonClass);
    }
    _enableSubmitButton(button) {
        button.removeAttribute('disabled');
        button.classList.remove(this._invalidButtonClass);
    }
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



