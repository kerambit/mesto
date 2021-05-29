import Popup from "./Popup";

export class popupWithDelete extends Popup {
constructor(popup, {submitHandler}) {
    super(popup);
    this._submitHandler = submitHandler;
}
 open(cardId, element) {
     super.open();
     this._cardId = cardId;
     this.element = element;
 }

 setEventListeners() {
     super.setEventListeners();
     this.element.addEventListener('submit', (evt) => {
         evt.preventDefault()
         this._submitHandler(this._cardId);
     })
 }
   cardId() {
    return this._cardId;
   }
}
