let value = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am resolved");
    }, 1000);
});

module.exports = { value }