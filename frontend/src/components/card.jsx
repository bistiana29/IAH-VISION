import React from "react";
import './Card.css';

const Card = ({ title, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
