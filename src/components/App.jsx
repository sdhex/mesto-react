import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
        <div className="popup popup_edit-profile">
          <div className="popup__container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <button
              className="popup__close-button popup__close-button_edit"
              type="button"
              aria-label="закрыть"
            />
            <form
              className="popup__form popup__form_type_edit"
              name="profile-form"
              noValidate
            >
              <input
                className="popup__input popup__input_type_profile-name"
                name="name"
                required
                type="text"
                minLength={2}
                maxLength={40}
                id="input-profile-name"
              />
              <span id="input-profile-name-error" className="popup__error" />
              <input
                className="popup__input popup__input_type_profile-about"
                name="about"
                required
                type="text"
                minLength={2}
                maxLength={200}
                id="input-profile-about"
              />
              <span id="input-profile-about-error" className="popup__error" />
              <button
                className="popup__button"
                type="submit"
                aria-label="сохранить"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_add-image">
          <div className="popup__container">
            <h2 className="popup__title">Новое место</h2>
            <button
              className="popup__close-button"
              type="button"
              aria-label="закрыть"
            />
            <form
              className="popup__form popup__form_type_add"
              name="card-form"
              noValidate
            >
              <input
                className="popup__input popup__input_type_gallery-title"
                placeholder="Название"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={30}
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
              <button
                className="popup__button popup__button_disabled"
                type="submit"
                aria-label="сохранить"
              >
                Создать
              </button>
            </form>
          </div>
        </div>
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
        <div className="popup popup_confirm-delete">
          <div className="popup__container">
            <h2 className="popup__title popup__title_confirm">Вы уверены?</h2>
            <button className="popup__button" type="submit">
              Да
            </button>
            <button
              className="popup__close-button"
              type="button"
              alt="закрыть"
            />
          </div>
        </div>
        <div className="popup popup_edit-avatar">
          <div className="popup__container">
            <h2 className="popup__title">Обновить аватар</h2>
            <button
              className="popup__close-button"
              type="button"
              aria-label="закрыть"
            />
            <form
              className="popup__form popup__form_type_add"
              name="avatar-form"
              noValidate
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
              <button
                className="popup__button popup__button_disabled"
                type="submit"
                aria-label="сохранить"
              >
                Создать
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
