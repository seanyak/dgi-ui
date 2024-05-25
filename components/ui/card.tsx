import React from 'react';

interface CardProps {
  title?: string;
  image?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, image, children, className }) => (
  <div className={`card ${className}`}>
    {image && <img src={image} alt={title} className="card-image" />}
    <div className="card-body">
      {title && <h3 className="card-title">{title}</h3>}
      {children}
    </div>
  </div>
);

export default Card;
