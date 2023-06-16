/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState('');
  const [link, setlink] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link
    });
  }

  function handleSetName(e) {
    setName(e.target.value);
  }

  function handleSetLink(e) {
    setlink(e.target.value);
  }

  React.useEffect(() => {
    setName('');
    setlink('');
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add-image"
      title="Новое место"
      textButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        onChange={handleSetName}
      />
      <span id="input-gallery-title-error" className="popup__error" />
      <input
        className="popup__input popup__input_type_gallery-link"
        placeholder="Ссылка на картинку"
        name="link"
        type="url"
        id="input-gallery-link"
        required
        onChange={handleSetLink}
      />
      <span id="input-gallery-link-error" className="popup__error" />
    </PopupWithForm>
  );
}
