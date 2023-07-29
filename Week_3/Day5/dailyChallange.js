/*
    29/07/2023 ASTAR
    Write a JavaScript program that recreates the pattern below.
    *  
    * *  
    * * *  
    * * * *  
    * * * * *
    * * * * * *
    Do this challenge twice: first by using one loop, then by using two nested for loops 
    (Nested means one inside the other - check out this tutorial of nested loops).

*/
console.log("Start");

//You can change const MAX_STAR_COUNT to change pattern string's count

const MAX_STAR_COUNT = "12"; //pattern strings count

console.log("1st - recreate pattern");

let star = "*";
for (let i = 0; i < MAX_STAR_COUNT; i++) {
    console.log(star);
    star = star + " *";
}

console.log("2th - used nested for loops");
i = 0;
let starArray = new Array;


while (i < MAX_STAR_COUNT) {
    starArray.push("*");
    do {
        console.log(starArray.join(" "));
    } while (i > MAX_STAR_COUNT)
    i++;
}

console.log("End");