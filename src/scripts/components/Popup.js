export default class Popup {
  constructor(popupSelector) {
   this._popupSelector = popupSelector;
  }

  open () {
    this.element.classList.add("popup_opened");
  };

  close() {
    this.element.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener("keydown", event => this._handleEscClose(event));
  }

}

