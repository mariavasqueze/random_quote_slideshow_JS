/*** 
 * `quotes` array 
***/
// the citation property is just for reference, the in-text citation will be printed on screen. 
let quotes = [
    {
        "quote": "\"Our industry does not respect tradition — it only respects innovation.\"",
        "author": "Satya Nadella",
        "inTextCitation": "(20 motivational quotes from Technology Leaders 2022)",
        "citation": "20 motivational quotes from Technology Leaders. SmallBizTechnology. (2022, March 8). Retrieved May 15, 2022, from https://www.smallbiztechnology.com/archive/2019/10/20-motivational-quotes-from-technology-leaders.html/ ",
        "year": "2014"
    },
    {
        "quote": "\"I do not fear computers. I fear lack of them.\"",
        "author": "Isaac Asimov",
        "inTextCitation": "(Bird, 2012)",
        "citation": "Bird, K. (2012, October 19). Technology quotes to Inspire You Today. Technology Quotes to Inspire You Today | Rasmussen University. Retrieved May 16, 2022, from https://www.rasmussen.edu/degrees/technology/blog/technology-quotes-to-inspire-you-today/ ",
        "year": ""
    },
    {
        "quote": "\"I have not failed. I’ve just found 10,000 ways that won’t work.\"",
        "author": "Thomas A. Edison",
        "inTextCitation": "(20 motivational quotes from Technology Leaders 2022)",
        "citation": "20 motivational quotes from Technology Leaders. SmallBizTechnology. (2022, March 8). Retrieved May 15, 2022, from https://www.smallbiztechnology.com/archive/2019/10/20-motivational-quotes-from-technology-leaders.html/ ",
        "year": "1910"
    },
    {
        "quote": "\"Innovation distinguishes between a leader and a follower\"",
        "author": "Steve Jobs",
        "inTextCitation": "(Johnson, 2020)" ,
        "citation": "Johnson, J. (2020, January 10). Inspiring Steve Jobs quotes for businesses. https://www.uschamber.com/co. Retrieved May 15, 2022, from https://www.uschamber.com/co/start/strategy/steve-jobs-quotes-for-business-owners ",
        "year": ""
    },
    {
        "quote": "\"I could either watch it happen or be a part of it.\"",
        "author": "Elon Musk",
        "inTextCitation": "(Economy, 2017)",
        "citation": "Economy, P. (2017, October 24). These 11 elon musk quotes will inspire your success and happiness. Inc.com. Retrieved May 15, 2022, from https://www.inc.com/peter-economy/11-elon-musk-quotes-that-will-push-you-to-achieve-impossible.html ",
        "year": ""
    },
    {
        "quote": "\"First, solve the problem. Then, write the code\"",
        "author": "John Johnson",
        "inTextCitation": "(Novoseltseva, 2021)",
        "citation": "Novoseltseva, E. (2021, June 17). 16 best programming quotes to inspire DEVS - dzone agile. dzone.com. Retrieved May 15, 2022, from https://dzone.com/articles/best-programming-jokes-amp-quotes ",
        "year": ""
    }

]

/***
 * `getRandomQuote` function
 *  get a random quote from the quotes array
***/

function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomNumber];
    return randomQuote;
}

/***
 * `printQuote` function
 *  print a random quote using getRandomQuote() and concatonate additional information if each quote has it.
***/
function printQuote() {
    let callRandomQuote = getRandomQuote();
   
    let htmlString = `
        <p class="quote">${callRandomQuote.quote}</p>
        <p class="source">${callRandomQuote.author}
        `;

    //print the in-text citation if the quote has one
    if(callRandomQuote.inTextCitation != ""){
        htmlString += `<span class="citation">${callRandomQuote.inTextCitation}</span>`;
    }
    //print the quote year if the quote has one
    if(callRandomQuote.year != ""){
        htmlString += `<span class="year">2016</span>`;
    }

    htmlString += `</p>`;
    document.getElementById("quote-box").innerHTML = htmlString;

    console.log(htmlString); //final check
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.
***/
document.getElementById('load-quote').addEventListener("click", printQuote);
