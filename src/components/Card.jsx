/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
// import React from "react";

export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="gallery__item">
      <button className="gallery__remove" type="button" aria-label="удалить" />
      <img
        className="gallery__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="gallery__description">
        <h2 className="gallery__title">{card.name}</h2>
        <div className="gallery__like-container">
          <button className="gallery__like" type="button" aria-label="лайк" />
          <span className="gallery__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}
