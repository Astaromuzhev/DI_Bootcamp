/*
    ASTAR 11/08/2023    
*/
/* Using a DOM property, retrieve the h1 and console.log it. */ 
console.log(document.getElementById("hypertext_s_1_1"));//1

let parElement = document.getElementById("article_id");
let childElement = parElement.lastElementChild;
parElement.removeChild(childElement);
/* Using DOM methods, remove the last paragraph in the <article> tag. */
function changeBackgroundRed(){                         //2
    const h2 = document.getElementsByClassName("hypertext_s_2");
    h2[0].style.background = "red";
}
/* Add a event listener which will change the background color of the h2 to red, when it’s clicked on. */
function hideElement(e){                                //3
    e.target.setAttribute("style","display:none");
}
/* Add an event listener which will hide the h3 when it’s clicked on (use the display:none property). */
function changeToBold(){
/*console.log(e.target.parentNode);
    console.log(e.target.parentNode.firstElementChild);
    console.log(e.target.firstElementChild);
    console.log(e.target.parentNode.children[0]);
    console.log(e.target.parentNode.childElementCount);
    console.log(e.target.parentNode.children.length);
    /*let i = 3;
    do {
        console.log(e.target.parentNode.children[i]);
        e.target.parentNode.children[i].setAttribute("style", "font-weight:bold");
        i++;
    } while (i<e.target.parentNode.children.length-1)
*/
    const pElements = document.getElementsByTagName("p");
    for(let i=0;i<pElements.length;i++){
        pElements[i].style.fontWeight = "bold";
    }
}
/* Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold. */
const MAX_SIZE = 100;
function getRandomNumber(upTo){
    return Math.floor(Math.random() * upTo);
}
/* BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation) */
function changeFontSize(e){
    let fontSize = getRandomNumber(MAX_SIZE) + "px";
    console.log(fontSize);
    e.target.setAttribute("style", "font-size:" + fontSize);
}
/* BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google) */
function setFedOutClass(e){
    e.target.className = "fade-out";
}





