// // asyncAwait.js
// const fetchData1 = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Data from fetchData1");
//             resolve();
//         }, 1000);
//     });
// };

// const fetchData2 = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Data from fetchData2");
//             resolve();
//         }, 1000);
//     });
// };

// const fetchData3 = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Data from fetchData3");
//             resolve();
//         }, 1000);
//     });
// };

// const fetchAllData = async () => {
//     await fetchData1();
//     await fetchData2();
//     await fetchData3();
//     console.log("All data fetched");
// };

// fetchAllData();



const fetchData1 = () => new Promise((res) => setTimeout(() => { console.log(" called data fetchData1 "); res() }, 1000))
const fetchData2 = () => new Promise((res) => setTimeout(() => { console.log(" called data fetchData2 "); res() }, 1000))
const fetchData3 = () => new Promise((res) => setTimeout(() => { console.log(" called data fetchData3 "); res() }, 1000))

const FetchallData = async () => {
    await fetchData1()
    await fetchData2()
    await fetchData3()
    console.log('all the call back are done')
}
FetchallData()