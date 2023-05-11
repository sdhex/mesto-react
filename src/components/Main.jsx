export default function Main() {
    return(
        <main className="main">
          <section className="profile">
            <div className="profile__avatar-container">
              <img className="profile__avatar" alt="аватар" />
              <button
                className="profile__avatar-button"
                type="button"
                aria-label="открыть редактирование аватара"
              />
            </div>
            <div className="profile__info">
              <h1 className="profile__name">Test</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="открыть редактирование профиля"
              />
              <p className="profile__description" />
            </div>
            <button
              className="profile__add-button"
              type="button"
              aria-label="добавить"
            />
          </section>
          <section className="gallery" aria-label="галерея" />
        </main>
    )
}