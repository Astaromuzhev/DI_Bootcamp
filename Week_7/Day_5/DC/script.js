allTruthy = (...args) => args.every( (element) => element===true )

console.log(allTruthy(5,4,3,2,1));
console.log(allTruthy(true, false, true));
console.log(allTruthy(true, true, true));