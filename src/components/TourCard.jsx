import React from 'react';

const TourCard = ({ id, name, info, image, price, onRemove }) => {
    return (
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h4>${price}</h4>
            <p>{info}</p>
            <button onClick={() => onRemove(id)}>Not Interested</button>
        </div>
    );
};

export default TourCard;

/* Second prompt: This project won't be using style sheets, read more is also not necessary. 
Create basic functionality and styling can be worked on afterwards */