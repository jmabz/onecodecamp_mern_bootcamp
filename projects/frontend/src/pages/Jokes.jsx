import React from 'react';
import JokeAxios from '../components/JokeAxios';
import JokeFetch from '../components/JokeFetch';

const Jokes = () => {
  return (
    <div>
        <h1>Jokes</h1>
        <JokeFetch/>
        <JokeAxios/>
    </div>
  )
};

export default Jokes;