// Implementation with plain callbacks
function emitRandomNumber(callback, attempt = 1) {
    const attempts = 10;
    console.log(`Attempt #${attempt}. emitRandomNumber is called.`);
    setTimeout(() => {
        console.log("2 seconds have lapsed.");
        let randomNumber = Math.floor(Math.random() * 100);
        callback(randomNumber);
        if (attempt < attempts && randomNumber < 80) {
            emitRandomNumber(callback, attempt + 1);
        } 
    }, 2000);
}

function processNumber(num) {
    console.log(`Random number generated is ${num}${num >= 80 ? '!!!' : ''}`);
}

// Implementation using a Promise object; this is also reused when invoked as an action
function emitRandomNumberAsPromise() {
    const attempts = 10;
    let attempt = 1;
    return new Promise((resolve, reject) => {
        let action = setInterval(() => {
            console.log(`Attempt #${attempt}. emitRandomNumber is called.`);
            console.log("2 seconds have lapsed.");
            let randomNumber = Math.floor(Math.random() * 100);
            processNumber(randomNumber);
            if (randomNumber >= 80 || attempt === attempts) {
                clearInterval(action);
                resolve();
                return;
            }
            attempt++;
            
        }, 2000);
    });
}

function emitRandomNumberViaPromise() {
    emitRandomNumberAsPromise();
}

async function emitRandomNumberAsync() {
    await emitRandomNumberAsPromise();
}