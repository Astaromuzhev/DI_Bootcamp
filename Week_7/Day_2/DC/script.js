/* ASTAR 08/29/2023 */
const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
const userNames = [];//userNames
const winners = [];//wineers
const PASS_LEVEL = 5;//definite what score win

let totalScore = 0;//total score all users

setUserNames = (gameArr, userArr) => ( gameArr.forEach ( (element) => userArr.push(element.username + "!")));

getWinnerNames = (gameArr, userArr) => (
    gameArr.forEach( (element) => {
    if (element.score>PASS_LEVEL) {
            userArr.push(element.username)}
        }));

getTotalScore = (gameArr) => ( gameArr.forEach( (elemenet) => {totalScore = totalScore + 1*elemenet.score} )  )

 
setUserNames(gameInfo, userNames);
console.log("userNames=>", userNames);

getWinnerNames(gameInfo, winners);
console.log("winners=>", winners);

getTotalScore(gameInfo)
console.log("totalScore=>", totalScore);

