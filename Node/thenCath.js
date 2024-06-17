// promises.js
const fetchData1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data from fetchData1");
            resolve();
        }, 1000);
    });
};

const fetchData2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data from fetchData2");
            resolve();
        }, 1000);
    });
};

const fetchData3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data from fetchData3");
            resolve();
        }, 1000);
    });
};

fetchData1()
    .then(fetchData2)
    .then(fetchData3)
    .then(() => {
        console.log("All data fetched");
    });
