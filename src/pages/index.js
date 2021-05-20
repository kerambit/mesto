import Card from "../scripts/components/Card.js";
import { initialCards } from "../scripts/utils/initialCards.js";
import FormValidator from "../scripts/components/FormValidator";
import { validateConfig } from "../scripts/utils/constants.js";
import "./index.css";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage";
import PopupWithForm from "../scripts/components/PopupWithForm";
import { UserInfo } from  "../scripts/components/UserInfo";
import Popup from "../scripts/components/Popup";



//const popupEditProfile = document.querySelector(".popup_type_edit-profile");
/* кнопка открытия профиля редактирования */
const openEditProfilePopupBtn = document.querySelector(".profile__edit-button");
/* кнопка открытия профиля добавления карточки */
const openAddCardPopupBtn = document.querySelector(".profile__add-button");

/* Переменая крестик закрытия */
//const closeEditProfilePopupBtn = popupEditProfile.querySelector(".popup__close-button_type_edit");
/* Переменая для контейнера с формой */
//const formEditProfile = popupEditProfile.querySelector(".popup__container_type_edit-profile");



const closeAddCardPopupBtn = document.querySelector(".popup__close-button_type_add");
const popupAdd = document.querySelector(".popup_type_add");
const cardOnline = document.querySelector(".cards");
const popupTypeImage = document.querySelector(".popup_type_image");
const pupupImageCard = document.querySelector(".popup__image");
const closeBtnpopupImage = document.querySelector(".popup__close-button_type_image");
const popupImageTitle = document.querySelector(".popup__caption");


const formAddCard = document.querySelector(".popup__container_add");
const popupСontainerAdd = document.querySelector(".popup__container_add");
const validatorAddCard = new FormValidator(validateConfig, popupСontainerAdd);

const popupСontainerEdit = document.querySelector(".popup__container_type_edit-profile");
const validatorEditProfile = new FormValidator(validateConfig, popupСontainerEdit);


validatorAddCard.enableValidation();
validatorEditProfile.enableValidation();

const popupImage = new PopupWithImage('.popup_type_image');

// создание нового элеменита карточки. Где мы из массива берем ссылку, название картинки и альт.
const section = new Section({ items:initialCards, renderer: (item) => {
        const handlerCardClick = () => popupImage.open(item);

        const card = new Card(item, handlerCardClick)
        const cardElement = card.generateCard();
        return cardElement;
    }}, '.cards');
section.renderer();


/*function openEditProfilePopup() {
  nameInput.value = newProfileTitle.textContent;
  jobInput.value = newProfileText.textContent;
  popupEditProfile.open();
  validatorEditProfile.removeInputError();
}



действие закрытие модального окна
function closePopup(element) {
  element.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
}
/*

*/
/* Переменая для заголовка куда будет добавляться новый текст */
/* Переменая для текста работы куда будет добавляться новый текст */
const newProfileTitle = document.querySelector(".profile__title"),
    newProfileText = document.querySelector(".profile__text"), userInfo = new UserInfo(newProfileTitle, newProfileText);


//сабмит профиля редактироватние
function handleEditProfileFormSubmit() {
    const nameInput = document.querySelector('.popup__input_type-name');
    const jobInput = document.querySelector('.popup__input_type-job');
    const getProfileData = userInfo.getUserInfo();
    nameInput.value = getProfileData.name;
    jobInput.value = getProfileData.jobName;
    popupEditProfile.open();
}

/*function createElement(item) {
    const card = new Card(item, ".card-template", openFullImage);
    const cardElement = card.generateCard();
    return cardElement;
}*/


function handleAddCardSubmit(evt) {
    //const newCardTitle = document.querySelector('[name="title"]');
    //const newLink = document.querySelector('[name="link"]');

    popupAddCard.close();
  formAddCard.reset();
}

/*function openAddCardPopup(element) {
  formAddCard.reset();
  openPopup(popupAdd);
  validatorAddCard.removeInputError();
} */

const popupEditProfile = new PopupWithForm('.popup_type_edit-profile', {
    handlerSubmit: (options) => {
        userInfo.setUserInfo(options);
        popupEditProfile.close();
    }
})

 const popupAddCard = new PopupWithForm('.popup_type_add', {
    handlerSubmit: (data) => {
        const element = card({
            name: data.name,
            link: data.link
        })
    }
})




popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
//popupEditProfile.addEventListener("submit", handleEditProfileFormSubmit);
formAddCard.addEventListener("submit", handleAddCardSubmit);
//document.addEventListener("click", closePopupClick);
/* Кнопка "редактировать" открывает модалку */
openEditProfilePopupBtn.addEventListener("click", handleEditProfileFormSubmit);
openAddCardPopupBtn.addEventListener("click", () => popupAddCard.open());
/* Кнопка "крестик" (закрыть модалку) */
//closeEditProfilePopupBtn.addEventListener("click", () => popupEditProfile.close());

//closeAddCardPopupBtn.addEventListener("click", () => closePopup(popupAdd));
//closeBtnpopupImage.addEventListener("click",close);
