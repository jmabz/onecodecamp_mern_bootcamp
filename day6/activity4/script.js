let timeInMinutes = 0;
let timeInSeconds = 0;
let isReset = false;

let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');

function initTimer() {
    timeInput = prompt("Enter the time of minutes (1~60):");
    timeInMinutes = parseInt(timeInput);
    if (isNaN(timeInMinutes) || (timeInMinutes < 1 || timeInMinutes > 60)) {
        alert("Invalid input: please enter a number between 1 and 60.");
        initTimer();
        return;
    }
    displayTimer();
}

function displayTimer() {
    minutesDisplay.innerText = ('' + timeInMinutes).padStart(2, '0');
    secondsDisplay.innerText = ('' + (timeInSeconds === 60 ? 0 : timeInSeconds)).padStart(2, '0');
}
initTimer();

startButton.addEventListener('click', () => {
    beginCountdown();
});

resetButton.addEventListener('click', () => {
    timeInMinutes = 0;
    timeInSeconds = 0;
    isReset = true;
    displayTimer();
});

function decrementTimer() {
    return new Promise((resolve, reject) => {
        let tick = setInterval(() => {
            if (timeInMinutes > 0 && timeInSeconds === 0) {
                timeInSeconds = 60;
                timeInMinutes--;
            }
            timeInSeconds--;
            displayTimer();
            if ((timeInSeconds === 0 && timeInMinutes === 0) || isReset) {
                clearInterval(tick);
                isReset = false;
                resolve();
            }
        }, 1000);
    });
}

async function beginCountdown() {
    await decrementTimer();
    if (timeInSeconds === 0 && timeInMinutes === 0) {
        alert('Time is up!');
    }
}