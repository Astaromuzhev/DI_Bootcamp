formatMonth = (month) => (month+1>9) ? month+1 : `0${month+1}`;
formatNonMonth = (nonMonth) => (nonMonth>9) ? nonMonth : `0${nonMonth}`;
formatDate = (inputDate) => `${inputDate.getFullYear()}${formatMonth(inputDate.getMonth())}${formatNonMonth(inputDate.getDate())}${formatNonMonth(inputDate.getHours())}${formatNonMonth(inputDate.getMinutes())}${formatNonMonth(inputDate.getSeconds())}`

// function formatDate(inputDate){
//     console.log(inputDate.getSeconds());
//     return `${inputDate.getFullYear()}${formatMonth(inputDate.getMonth())}${formatNonMonth(inputDate.getDate())}${formatNonMonth(inputDate.getHours())}${formatNonMonth(inputDate.getMinutes())}${formatNonMonth(inputDate.getSeconds())}`
// }

let currentDate = new Date;

console.log("currentDate", formatDate(currentDate));

console.log("20200704080000>",formatDate(new Date(2020, 6, 4, 8, 0, 0)));

console.log("20191231235959>",formatDate(new Date(2019, 11, 31, 23, 59, 59)));

console.log("20200704000000>",formatDate(new Date(2020, 6, 4)));