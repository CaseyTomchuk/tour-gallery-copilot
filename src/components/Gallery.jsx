import React from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, handleRemove }) => {
    return (
        <div className="gallery">
            {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} handleRemove ={handleRemove} />
            ))}
        </div>
    );
};

export default Gallery;

// Copilot was able to remember the instructions to focus on functionality first!
// Had to manually add handleRemove to Gallery so it coudl be passed to TourCard.

// Troubleshooting: had to pass handleRemove to TourCard. Copilot struggles with connecting components.