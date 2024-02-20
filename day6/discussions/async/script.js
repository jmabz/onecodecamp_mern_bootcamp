// Synchronous sequence
console.log("First");
console.log("Second");
console.log("Third");

// Asynchronous
console.log("First");
setTimeout(() => {
    console.log("Second");
}, 2000);
console.log("Third");

// Simulate an asynchronous action (in this case, requesting for external data), taking a callback function that deals with the result.
const getData = (callback) => {
    setTimeout(() => {
        const data = "This is data";
        callback(data);
    }, 2000);
};

// Callback for getData: Print the result out 
const processData = (data) => {
    console.log("Processed data: ", data);
}

// Multiple callbacks
const step1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 complete");
            resolve();
        }, 1000);
    });
};

const step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 2 complete");
            resolve();
        }, 1000);
    });
};

const step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 3 complete");
            resolve();
        }, 1000);
    });
};


// Callback hell
// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps complete");
//         })
//     })
// });

// Promise chain
step1()
    .then(step2)
    .then(step3)
    .then(() => {
        console.log("All steps complete");
    })
    .catch((error) => {
        console.error("An error occured: ", error);
    });

// Application of async + await
const performSteps = async () => {
    try {
        await step1();
        await step2();
        await step3();
        console.log("All steps complete");
    } catch (error) {
        console.error("An error occured: ", error);
    }
}

performSteps();