/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import Footer from './Footer';
import ImagePopup from './ImagePopup';

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <PopupWithForm
          name="proifile"
          title="Редактировать профиль"
          textButton="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_type_profile-name"
            name="name"
            placeholder="Имя"
            required
            type="text"
            minLength="2"
            maxLength="40"
            id="input-profile-name"
          />
          <span id="input-profile-name-error" className="popup__error" />
          <input
            className="popup__input popup__input_type_profile-about"
            name="about"
            placeholder="О себе"
            required
            type="text"
            minLength="2"
            maxLength="200"
            id="input-profile-about"
          />
          <span id="input-profile-about-error" className="popup__error" />
        </PopupWithForm>
        <PopupWithForm
          name="add-image"
          title="Новое место"
          textButton="Сохранить"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_type_gallery-title"
            placeholder="Название"
            name="name"
            type="text"
            required
            minLength="2"
            maxLength="30"
            id="input-gallery-title"
          />
          <span id="input-gallery-title-error" className="popup__error" />
          <input
            className="popup__input popup__input_type_gallery-link"
            placeholder="Ссылка на картинку"
            name="link"
            type="url"
            id="input-gallery-link"
            required
          />
          <span id="input-gallery-link-error" className="popup__error" />
        </PopupWithForm>
        <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          textButton="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_type_avatar-link"
            placeholder="Ссылка на картинку"
            name="avatar"
            type="url"
            id="input-avatar-link"
            required
          />
          <span id="input-avatar-link-error" className="popup__error" />
        </PopupWithForm>
        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
        <Footer />
        <div className="popup popup_view-image">
          <figure className="popup__figure">
            <img alt="test" className="popup__image" />
            <button
              className="popup__close-button popup__close-button_image"
              type="button"
              alt="закрыть"
            />
            <figcaption className="popup__image-title" />
          </figure>
        </div>
      </div>
    </div>
  );
}
