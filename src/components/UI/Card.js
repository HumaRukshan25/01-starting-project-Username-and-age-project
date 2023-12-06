// Card.js
import React from 'react';
import './Card.css'; // Import the CSS file

const Card = (props) => {
  return <div className="card">{props.children}</div>;
};

export default Card;
