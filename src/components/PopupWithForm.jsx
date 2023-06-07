/* eslint-disable react/prop-types */
export default function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  children,
  textButton,
}) {
  const className = `popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`;

  return (
    <div className={className}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <button
          className="popup__close-button"
          onClick={onClose}
          type="button"
          aria-label="закрыть"
        />
        <form
          className={`popup__form popup__form_type_${name}`}
          name={name}
          noValidate
        >
          {children}
          <button
            className="popup__button"
            type="button"
            aria-label={textButton}
          >
            {textButton}
          </button>
        </form>
      </div>
    </div>
  );
}
