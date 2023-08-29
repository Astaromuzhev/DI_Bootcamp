// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
// #1.1 - run in the console:
//funcOne() //##ASTAR a => 3
// #1.2 What will happen if the variable is declared 
// with const instead of let ? //##ASTAR ERROR

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
// funcThree() //##ASTAR "inside the funcThree function 0"
// funcTwo() //##ASTAR a => 5
// funcThree() //##ASTAR "inside the funcThree function 5"

// // #2.2 What will happen if the variable is declared 
// // with const instead of let ? //##ASTAR funcThree() - the same, funcTwo() - error


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour()//##ASTARI Dont understand what happens 
// funcFive()//##ASTAR inside the funcFive function 0

// //#4
// const a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()//##ASTAR Error
// #4.2 What will happen if the variable is declared 
// with const instead of let ?//##ASTAR the same error

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console //##ASTAR Why its worked?) 
// // #5.2 What will happen if the variable is declared //##ASTAR in 2 cases 
// // with const instead of let ?

/*##ASTAR 27/08/2023 Ex 2*/
function winBattle(){
    return true;
}

winBattle_arrow = () => true;

console.log(winBattle());
console.log(winBattle_arrow());

let experiencePoints;
experiencePoints = (winBattle_arrow) ? 10 : 1;
console.log(experiencePoints);

/*##ASTAR 27/08/2023 Ex 3*/
isString = (str) => (typeof str ==='string') ? true : false;

console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));

/*##ASTAR 27/08/2023 Ex 4*/
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((element, index) => {console.log(`${index}# choice is ${element}`)
});

checkViolet = colors.some( (element) => { 
    // if (element == "Violet") {
    //  return "yeah"
    // } else { return "no" } 
    (element == "Violet") ? "yeah" : "no"
})

console.log(checkViolet);

/*##ASTAR 27/08/2023 Ex 5*/
const colors1 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

// ordinal.forEach( (element, index) =>console.log(`${index}${element} choice is ${colors1[index]}`) )

colors1.forEach( (element, index) => (index>=0 && index<3) ? console.log(`${index+1}${ordinal[index+1]} choice is ${element}`) : console.log(`${index}${ordinal[0]} choice is ${element}`) )

/*##ASTAR 27/08/2023 Ex 6*/
let bankAmount = 0;//
const VAT = 0.17;

const details = ["+100","-100"];
// const details = ["+200", "-100", "+146", "+167", "-2900"];
const modifyExpenses = [];
details.forEach( (element) =>  modifyExpenses.push(element*(1+VAT)) )
console.log(modifyExpenses);

details.forEach( (element) => bankAmount = bankAmount + element*(1+VAT));
console.log(bankAmount);
