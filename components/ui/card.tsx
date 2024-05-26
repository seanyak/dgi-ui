import React from 'react';
import Image from 'next/image';

interface CardProps {
  title?: string;
  image?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, image, children, className }) => (
  <div className={`card ${className}`}>
    {image && (
      <Image
        src={image}
        alt={title || 'Card image'}
        className="card-image"
        layout="responsive"
        width={500} // You can adjust these values according to your requirements
        height={300}
      />
    )}
    <div className="card-body">
      {title && <h3 className="card-title">{title}</h3>}
      {children}
    </div>
  </div>
);

Card.displayName = 'Card'; // Add a display name for better debugging

export default Card;
