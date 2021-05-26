import Popup from "./Popup";

export default class PopupWithForm extends Popup {

    constructor(popupSelector, {handlerSubmit}) {
        super(popupSelector);
        this._form = this.element.querySelector('.popup__container');
        this._handlerSubmit = handlerSubmit;
    }

    _getInputValues() {
        this._values = {};
        this._inputs = this._form.querySelectorAll('.popup__input')
        this._inputs.forEach((input) => (this._values[input.name]= input.value));
        return  this._values;
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {evt.preventDefault();
            this._handlerSubmit(this._getInputValues());
        })
    }

    close()
    {
        super.close();
        this._form.reset();
    }
}