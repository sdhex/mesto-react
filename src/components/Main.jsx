/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getLoadingData()
      .then(([user, items]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(items);
      })
      .catch((err) => console.log('Ошибка:', err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" alt="аватар" src={userAvatar} />
          <button
            className="profile__avatar-button"
            type="button"
            aria-label="открыть редактирование аватара"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="открыть редактирование профиля"
            onClick={onEditProfile}
          />
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить карточку места"
          onClick={onAddPlace}
        />
      </section>
      <section className="gallery" aria-label="галерея">
        {cards.map((card) => (
          <Card card={card} onCardClick={onCardClick} key={card._id} />
        ))}
      </section>
    </main>
  )
}
