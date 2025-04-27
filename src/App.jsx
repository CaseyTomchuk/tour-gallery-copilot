import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery'
const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        console.log(data); // Added for debugging 
        setTours(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);


  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

// Task 5: 
  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours left</h2>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </div>
    );
  }

  const handleRemove = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
<Gallery
      tours={tours}
      loading={loading}
      error={error}  
      handleRemove={handleRemove}
     />
  );
};

export default App;

// Step 4 was completed already from the first prompt. 

// Had to return Gallery component rather than a <ul> element. Copilot is having a hard time connecting components.