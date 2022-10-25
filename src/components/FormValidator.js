export default class FormValidator {
    constructor(settings, form) {
        this._settings = settings;
        this._form = form;
        this._invalidButtonClass = settings.invalidButtonClass;
        this._inputError = settings.inputError;
    }
    enableValidation() {
        this._form.addEventListener('submit', (evt) => evt.preventDefault());
        this._setEventListeners();
    }
    _setEventListeners() {
        this._buttonElement = this._form.querySelector(this._settings.button);
        this._inputList = this._form.querySelectorAll(this._settings.input);
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._inputElement = inputElement;
                this._handleFormInput();                
            });
        });

    }
    _handleFormInput() {
        // 1. Установить кастомные тексты ошибок
        //_setCustomError(input);
        // 2. Показать ошибки в контейнере под полем
        this._showFieldError();
        // 3. Включить ил отключить кнопку отправки формы
        this._setSubmitButtonState();
        // 4. Подсветить или отсветить инпут
        this._setInputState();
    }
    _showFieldError() {
        const span = this._form.querySelector(`.${this._inputElement.id}-error`);
        span.textContent = this._inputElement.validationMessage;
    }
    _setSubmitButtonState() {
        const isValid = this._form.checkValidity();

        if (isValid) {
            this._enableSubmitButton(this._buttonElement);
        }
        else {
            this.disabledSubmitButton(this._buttonElement);
        }
    }
    disabledSubmitButton(button) {
        button.setAttribute('disabled', true);
        button.classList.add(this._invalidButtonClass);
    }
    _enableSubmitButton(button) {
        button.removeAttribute('disabled');
        button.classList.remove(this._invalidButtonClass);
    }
    _setInputState() {
        const isValid = this._inputElement.checkValidity();
        // если строчка невалидная
        if (!isValid) {
            this._inputElement.classList.add(this._inputError);
        }
        else {
            this._inputElement.classList.remove(this._inputError);
        }

    }
    clearError() {
        this._inputList.forEach((item) => {item.classList.remove(this._inputError)});
        this._form.querySelectorAll(this._settings.spanError).forEach((item) => {item.textContent = '';});
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