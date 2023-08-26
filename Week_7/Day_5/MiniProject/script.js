const arr = [
    {
            id: 0, 
            author: "Anna", 
            quote: "Anna so Anna", 
            likes: 0},
    {
            id: 1, 
            author: "Taras Shevchenko", 
            // quote: "Neither fate, nor honor, nor freedom comes without suffering.", 
            quote: "Neither fate, nor honor, nor freedom comes without suffering",             
            likes: 0},
    {
            id: 2, 
            author: "Vitaly Klichko", 
            quote: "It\'s difficult to understand me, easy not to understand, impossible to understand", 
            likes:0},
    {
            id: 3, 
            author: "Volodymyr Zelensky", 
            quote: "I don't promise, I do.", 
            likes: 0}
]

let randomNum;


const arrChoice = [];//here will be all history of indexes of choosed phrases

const searchedQuote = [];
let currSearcheIndex = 0;

getRandomNumber = (x = arr.length) => Math.floor(Math.random() * x);//Random Number

addElementToArray = (arrInp, x) => arrInp.push(x); //Add x to arrInp

checkRandomNumberIfExists = (x) => arrChoice.some( (item) => item == x ); //check if x in arrChoice

/* ASTAR 17/08/2023 Generate New index of Quote and check if this Quote didnt showed*/
generateRandomIndexOfQuote = () => {
    randomNum;
    //looking for number, that random didnt choice
    do 
    {
        randomNum = getRandomNumber();
        let isCorrectIndex = checkRandomNumberIfExists(randomNum);
        if (!isCorrectIndex){
            addElementToArray(arrChoice, randomNum);
            return randomNum;
        } 
    } while (arrChoice.length < arr.length )
}
/* ASTAR 26/08/2023 Creates diev Element and Add to parentNode*/
createDivElement = (parentNode, textContent, classId, className) => {
    let divElement = document.createElement("div");
    divElement.textContent = textContent;
    if (!!classId){ 
        divElement.id = classId;
    }
    if (!!className) {
        divElement.className = className;//for styling
    }
    parentNode.appendChild(divElement);
};
/*  17/08/2023 ASTAR Add function Show Random Quote from Vocabulary*/
function generateRandomQuote(e){

    if (arrChoice.length < arr.length){
        let parentNode = e.target.parentNode;
        let divQuoteArea = document.getElementById("quote_area_id");
        if (!!divQuoteArea){
            parentNode.removeChild(divQuoteArea);
        }
        let indexOfQuote = generateRandomIndexOfQuote();  

        divQuoteArea = document.createElement('div');
        divQuoteArea.id = "quote_area_id";

        createDivElement(divQuoteArea, arr[indexOfQuote].quote, "quote_text_id", "quote_text");//id for search in addLikeToQuote
        createDivElement(divQuoteArea, arr[indexOfQuote].author, "","quote_author"); 
        
        parentNode.appendChild(divQuoteArea);
    }
}

/*ASTAR 26/08/2023 Add function - add quote to vocabulary*/
function addNewQuoteToVocablory(e){
    e.preventDefault();
    const form_add_quote = document.forms["add_quote_form_id"];
    const new_quote_text = form_add_quote.elements.quote_form_text.value;
    const new_quote_author = form_add_quote.elements.quote_form_author.value;

    if (!!new_quote_text && !!new_quote_author){
        let obj = new Object;
        obj.id = arr.length;
        obj.quote = new_quote_text;
        obj.author = new_quote_author;
        obj.likes = 0;
        addElementToArray(arr, obj);    
    }
    console.log(arr);
}

/*ASTAR 26/08/2023 Add function get length*/
countCharacterTensens = (x) => x.length

/*ASTAR 26/08/2023 Add function get length x without separator-character*/
countCharacterTensensWOSpace = (x, separator) => countCharacterTensens(x) - x.split(separator).length + 1
//countCharacterTensensWOSpace = (x, separator) => 1*x.split(separator).length -1//;//x.length // - x.split(" ").length}

/*ASTAR 26/08/2023 get length every quote*/
countCharacterSpaceIncl = () => arr.forEach( (element) => console.log(element.quote, countCharacterTensens(element.quote) ) )//{

/*ASTAR 26/08/2023 get length every quote without space*/
countCharacterWOSpace = () => arr.forEach( (element) => console.log(element.quote, countCharacterTensensWOSpace(element.quote, " ") ) )

/*ASTAR 26/08/2023 number of words in each quote*/
countNumberOfWords = () => arr.forEach( (element) => console.log(element.quote,element.quote.split(" ").length))

/*ASTAR 26/08/2023 add like*/
addLikeToQuote = () => {
    if (!!document.getElementById("quote_text_id")){
        arr[randomNum].likes = arr[randomNum].likes+1;//arr[randomNum].likes++ doesnt  work, Daniel, why?
        console.log(randomNum, arr);
    }
}

/*ASTAR 26/08/2023 Open Search Form
    !!!I dont like this algoritm - i have to do more compact!!!
*/
openSearch = (e) => {
    if (!document.getElementById("search_quote_area_id")){
        let quoteSearchDiv = document.createElement("div");
        quoteSearchDiv.id="search_quote_area_id";

        let searchQuoteText = document.createElement('div');
        searchQuoteText.className = "quote_text";//for styling
        searchQuoteText.id = "search_quote_text_id"; //for button Next and Previos - change contentText

        let searchQuoteAuthor = document.createElement("div");
        searchQuoteAuthor.className = "quote_author";//for styling
        searchQuoteAuthor.id = "search_quote_author_id";//for button Next and Previos - change contentText

        quoteSearchDiv.appendChild(searchQuoteText);
        quoteSearchDiv.appendChild(searchQuoteAuthor);

        let inputForm = document.createElement("input");
        inputForm.id = "search_author";
        inputForm.setAttribute("name", "text");
        inputForm.setAttribute("placeholder", "Search By Author");

        let buttonForm = document.createElement("button");
        buttonForm.className = "show_quote_but";
        buttonForm.id = "search_button";
        buttonForm.textContent = "Search";

        let formDiv = document.createElement("form");
        formDiv.id="search_form_id";
        formDiv.setAttribute("onsubmit", "searchQuoteByAuthor(event)");

        formDiv.appendChild(inputForm);
        formDiv.appendChild(buttonForm);

        let buttonPanel = document.createElement("div");
        buttonPanel.className = "button_panel";

        let buttonNavigate = document.createElement("button");  
        buttonNavigate.className = "button_bottom";
        buttonNavigate.setAttribute("onclick","getPreviosQuote()");

        let navigateImage = document.createElement("img");
        navigateImage.setAttribute("src","./IMAGES/arrow-left-solid.svg");

        buttonNavigate.appendChild(navigateImage);
        buttonPanel.appendChild(buttonNavigate);

        buttonNavigate = document.createElement("button");
        buttonNavigate.className = "button_bottom";
        buttonNavigate.setAttribute("onclick","getNextQuote()");

        navigateImage = document.createElement("img");
        navigateImage.setAttribute("src","./IMAGES/arrow-right-solid.svg");

        buttonNavigate.appendChild(navigateImage);
        buttonPanel.appendChild(buttonNavigate);

        let searchDiv = document.createElement("div");
        searchDiv.className = "search_quote_div"
        
        searchDiv.appendChild(quoteSearchDiv);
        searchDiv.appendChild(formDiv);


        e.target.parentNode.parentNode.parentNode.appendChild(searchDiv);
        e.target.parentNode.parentNode.parentNode.appendChild(buttonPanel);
    }  else {
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode.lastElementChild);
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode.lastElementChild);
    }
}

setSearchedQuote = () => {
    document.getElementById("search_quote_text_id").textContent = arr[searchedQuote[currSearcheIndex]].quote;
    document.getElementById("search_quote_author_id").textContent = arr[searchedQuote[currSearcheIndex]].author;
}
searchQuoteByAuthor = (e) => {
    e.preventDefault();
    let searchStr = document.forms["search_form_id"].elements.search_author.value.toLowerCase();

    searchedQuote.length = 0;//every search clear previos found

    arr.some( (element, index) => {//search all quotes by author
        if (element.author.toLowerCase().indexOf(searchStr)>-1) {
            searchedQuote.push(index) }
    }
    )

    if (searchedQuote.length>0){
        currSearcheIndex = 0;
        setSearchedQuote();
    }

    console.log(searchedQuote);
}
getNextQuote = () => {
    if (currSearcheIndex<searchedQuote.length-1){
        currSearcheIndex++;
        setSearchedQuote();
    }
}
getPreviosQuote =() => {
    if (currSearcheIndex>0){
        currSearcheIndex--;
        setSearchedQuote();
    }
}
    
