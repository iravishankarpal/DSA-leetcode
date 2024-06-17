// callbackHell.js
const fetchData1 = (callback) => {
    setTimeout(() => {
        console.log("Data from fetchData1");
        callback();
    }, 1000);
};

const fetchData2 = (callback) => {
    setTimeout(() => {
        console.log("Data from fetchData2");
        callback();
    }, 1000);
};

const fetchData3 = (callback) => {
    setTimeout(() => {
        console.log("Data from fetchData3");
        callback();
    }, 1000);
};

// Callback hell example
fetchData1(() => {
    fetchData2(() => {
        fetchData3(() => {
            console.log("All data fetched");
        });
    });
});
