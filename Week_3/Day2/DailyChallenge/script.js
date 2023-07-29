/*
    ASTAR 29/07/2023
    Exercise 1:
    const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

    1. Remove Banana from the array.
    2. Sort the array in alphabetical order.
    3. Add “Kiwi” to the end of the array.
    4. Remove “Apples” from the array. Don’t use the same method as in part 1.
    5. Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
    At the end you should see this outcome:
    ["Kiwi", "Oranges", "Blueberries"]
*/

const FRUITS = ["Banana", "Apples", "Oranges", "Blueberries"];

console.log(FRUITS);
FRUITS.shift();                 //1
console.log(FRUITS);
FRUITS.sort();                  //2
console.log(FRUITS);
FRUITS.push("Kiwi");            //3
console.log(FRUITS);
FRUITS.splice(0,1);             //4
console.log(FRUITS);
FRUITS.reverse();               //5
console.log(FRUITS);

/*
    ASTAR 29/07/2023
    Exercise 2:
    const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

*/

const MORE_FRUITS = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(MORE_FRUITS[1][1][0]);




