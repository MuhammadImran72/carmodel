import React, { useState } from 'react';
import axios from 'axios';

const TyreSearch = () => {
  const [tyres, setTyres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchTyres = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        'https://www.bletchleytyres.co.uk/vrnsearch/results',
        {
          params: {
            width: 185,
            profile: 60,
            rim: 15,
            make: 'RENAULT',
            model: 'CLIO EXPRESSION DCI',
            speed: 'H',
          },
        }
      );
      setTyres(response.data);
    } catch (err) {
      setError('Failed to fetch tyre data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Tyre Search Results</h1>
      <button onClick={fetchTyres}>Fetch Tyres</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {tyres.map((tyre, index) => (
          <li key={index}>
            <p><strong>Brand:</strong> {tyre.brand}</p>
            <p><strong>Model:</strong> {tyre.model}</p>
            <p><strong>Size:</strong> {tyre.size}</p>
            <p><strong>Speed Rating:</strong> {tyre.speedRating}</p>
            <p><strong>Price:</strong> {tyre.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TyreSearch;
