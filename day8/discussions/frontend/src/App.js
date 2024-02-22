import React from 'react';
import './App.css';
import RealTimeClock from './RealTimeClock';

function App() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let suffix = hours >= 12 ? "PM" : "AM";
  let time = `${hours % 12 === 0 ? 12 : hours % 12}:${(minutes + "").padStart(2, "0")}:${(seconds + "").padStart(2, "0")} ${suffix}`;

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <h2>It is {time}.</h2>
      <RealTimeClock></RealTimeClock>
    </div>
  );
}

export default App;
