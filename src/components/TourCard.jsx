import React from 'react';

function TourCard({ tour, handleRemove }) {
    return (
        <div>
            <img src={tour.image} alt={tour.name} />
            <h2>{tour.name}</h2>
            <h4>${tour.price}</h4>
            <p>{tour.info}</p>
            <button onClick={() => handleRemove(tour.id)}>Not Interested</button>
        </div>
    );
}

export default TourCard;

// Prompts: const TourCard should be function TourCard({tour, handleRemove}) tour comes from App.jsx (tour, setTour)
// Almost correct, but the const that is created is not needed, and <h2>{name}</h2> should instead look like <h2>tour.name</h2> (apply to all)

// -------------------------------------------------------------------

/*const TourCard = ({ id, name, info, image, price, onRemove }) => {
    return (
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h4>${price}</h4>
            <p>{info}</p>
            <button onClick={() => onRemove(id)}>Not Interested</button>
        </div>
    );
}; Initial version, but it was not done correrectly as it was not handling props and was not a function */
// Prompt: keep simplistic and focus on functionality first, then style it later.