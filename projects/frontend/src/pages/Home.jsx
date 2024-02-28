import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = fetch('https://boredapi.com/api/activity');

        if(!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);  
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
        <h1>Welcome to the Home Page</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        {!loading && !error && (
          <div>
            <p>Activity: {data?.activity}</p>
            <p>Type: {data?.type}</p>
          </div>
        )}
    </div>
  )
};

export default Home;