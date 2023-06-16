/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about)
  }, [currentUser]);



  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
        name,
        about: description
    })
  }

  return (
    <PopupWithForm
      name="proifile"
      title="Редактировать профиль"
      textButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        value={name ?? ''}
        onChange={handleChangeName}

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
        value={description ?? ''}
        onChange={handleChangeDescription}
      />
      <span id="input-profile-about-error" className="popup__error" />
    </PopupWithForm>
  );
}
