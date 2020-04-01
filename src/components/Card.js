import React from 'react';
import '../Styles/card.css';

const Card = ({ id, name, mail }) => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${id}`} alt=" a robot" width="200" height="200" />
      <div>
        <h2>{name}</h2>
        <p>{mail}</p>
      </div>
    </div>
  );
}

export default Card;