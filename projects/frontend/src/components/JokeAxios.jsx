import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JokeAxios = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => { 
            try {
                const response = await axios.get('https://v2.jokeapi.dev/joke/Programming');
                const result = response.data;

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
            <h2>Joke Generator (Axios)</h2>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!isLoading && !error && (
                data.type === "single" ? <p>{data.joke}</p> : <div><p>{data.setup}</p><br/><p>{data.delivery}</p></div>
            )}
        </div>
    );
};

export default JokeAxios;