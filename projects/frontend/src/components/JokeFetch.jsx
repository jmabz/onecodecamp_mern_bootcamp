import React, { useState, useEffect } from 'react';

const JokeFetch = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => { 
            try {
                const response = await fetch('https://v2.jokeapi.dev/joke/Programming');

                if (!response.ok) {
                    throw new Error(`Looks like an error occurred: ${response.statusText} (${response.status})`);
                }

                const result = await response.json();
                // API-level error, if any
                if (result.error) {
                    throw new Error(`Looks like an error occurred: ${result.message}`);
                }

                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);
    

    return (
        <div>
            <h2>Joke Generator (Fetch)</h2>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!isLoading && !error && (
                data.type === "single" ? <p>{data.joke}</p> : <div><p>{data.setup}</p><br/><p>{data.delivery}</p></div>
            )}
        </div>
    );
};

export default JokeFetch;