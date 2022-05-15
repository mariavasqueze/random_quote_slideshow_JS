/*
    Programmer: Maria Vasquez
    Student ID: 300357507
    Purpose: print random quotes from the quotes array when button is clicked
*/

/*** 
 * `quotes` array 
***/
let quotes = [
    {
        "quote": "\"Our industry does not respect tradition — it only respects innovation.\"",
        "author": "Satya Nadella",
        "citation": "20 motivational quotes from Technology Leaders. SmallBizTechnology. (2022, March 8). Retrieved May 15, 2022, from https://www.smallbiztechnology.com/archive/2019/10/20-motivational-quotes-from-technology-leaders.html/ ",
        "year": "2014"
    },
    {
        "quote": "\"Stone Age. Bronze Age. Iron Age. We define entire epics of humanity by the technology they us.\"",
        "author": "Reed Hastings",
        "citation": "Reed Hastings Quotes. (n.d.). BrainyQuote.com. Retrieved May 15, 2022, from BrainyQuote.com Web site: https://www.brainyquote.com/quotes/reed_hastings_423625",
        "year": ""
    },
    {
        "quote": "\"I have not failed. I’ve just found 10,000 ways that won’t work.\"",
        "author": "Thomas A. Edison",
        "citation": "20 motivational quotes from Technology Leaders. SmallBizTechnology. (2022, March 8). Retrieved May 15, 2022, from https://www.smallbiztechnology.com/archive/2019/10/20-motivational-quotes-from-technology-leaders.html/ ",
        "year": "1910"
    },
    {
        "quote": "\"Innovation distinguishes between a leader and a follower\"",
        "author": "Steve Jobs",
        "citation": "Johnson, J. (2020, January 10). Inspiring Steve Jobs quotes for businesses. https://www.uschamber.com/co. Retrieved May 15, 2022, from https://www.uschamber.com/co/start/strategy/steve-jobs-quotes-for-business-owners ",
        "year": ""
    },
    {
        "quote": "\"I could either watch it happen or be a part of it.\"",
        "author": "Elon Musk",
        "citattion": "Economy, P. (2017, October 24). These 11 elon musk quotes will inspire your success and happiness. Inc.com. Retrieved May 15, 2022, from https://www.inc.com/peter-economy/11-elon-musk-quotes-that-will-push-you-to-achieve-impossible.html ",
        "year": ""
    },
    {
        "quote": "\"First, solve the problem. Then, write the code\"",
        "author": "John Johnson",
        "citation": "Novoseltseva, E. (2021, June 17). 16 best programming quotes to inspire DEVS - dzone agile. dzone.com. Retrieved May 15, 2022, from https://dzone.com/articles/best-programming-jokes-amp-quotes ",
        "year": ""
    }

]

console.log(quotes); //to check
/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomNumber];
    return randomQuote;
}

console.log(getRandomQuote()); //to check

/***
 * `printQuote` function
***/
function printQuote() {
    // 1. Create a variable that calls the getRandomQuote()
    // function
    // 2. Create a variable that initiates your HTML string with
    // the first two <p></p> elements, their classNames,
    // and the quote and source properties, but leave off
    // the second closing `</p>` tag for now
    // 3. Use an if statement to check if the citation property
    // exists, and if it does, concatenate a <span></span>
    // element, appropriate className, and citation property
    // to the HTML string
    // 4. Use an if statement to check of the year property exists,
    // and if it does, concatenate a <span></span> element,
    // appropriate className, and year property to the HTML
    //string
    // 5. After the two if statements, concatenate the closing </p>
    // tag to the HTML string
    // 6. set the innerHTML of the quote-box div to equal the
    // complete HTML string
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener // ...