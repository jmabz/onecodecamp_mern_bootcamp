import React from 'react';
import {useState, useEffect} from 'react';

function RealTimeClock() {
    const [time, setTime] = useState(getCurrentTime());

    function getCurrentTime() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let suffix = hours >= 12 ? "PM" : "AM";
        return `${hours % 12 === 0 ? 12 : hours % 12}:${(minutes + "").padStart(2, "0")}:${(seconds + "").padStart(2, "0")} ${suffix}`;
    }

    useEffect(() => {
        setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);
    });

    return (<h2>It is {time}.</h2>);
}

export default RealTimeClock;