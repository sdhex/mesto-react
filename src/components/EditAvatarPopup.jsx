/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    })
  }

    React.useEffect(() => {
      avatarRef.current.value = "";
    }, [isOpen])

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      textButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_avatar-link"
        placeholder="Ссылка на картинку"
        name="avatar"
        type="url"
        id="input-avatar-link"
        defaultValue=""
        required
        ref={avatarRef}
      />
      <span id="input-avatar-link-error" className="popup__error" />
    </PopupWithForm>
  );
}
