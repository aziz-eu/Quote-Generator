// DOM 
const quoteContainer = document.getElementById('quote-container');
const displayQuotes = document.getElementById('quote');
const displayAuthor = document.getElementById('author')
const twitterBtn = document.getElementById('twitter-btn')
const nextQuoteBtn = document.getElementById('next-quote')
const loader = document.getElementById('loader')
//Quotes storer Array

let quotes = [];

// new Randon Quote Function 
const newQuote = () =>
{

    loading()
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(randomQuote.text.length);
    displayQuotes.innerText = randomQuote.text;

    // font size changeing on quote length
    if (randomQuote.text.length > 120) {
        displayQuotes.classList.add('large-quote-text');
       
    }
    else {
        displayQuotes.classList.remove('large-quote-text')
        
    }
    if(!randomQuote.author){
        displayAuthor.innerText = "Unknown"
    }
    else{
        displayAuthor.innerText = randomQuote.author;
    }
    loadingComplete();

}


// Fatch Data from API

async function getQuotes ()
{
    loading();
    const apiUrl = 'https://type.fit/api/quotes';

    try {

        const respones = await fetch(apiUrl);

        quotes = await respones.json();
        newQuote();



    }
    catch (err) {


    }
}

// Twitte Quote Function
const tweetQuote = () =>{
    const twitterUrl = `https://twitter.com/intent/tweet?text=${displayQuotes.textContent} - ${displayAuthor.textContent}`
    window.open(twitterUrl, '_blank')
}

//loader 

const loading = () =>{
    loader.hidden = false;
    quoteContainer.hidden = true;
}

const loadingComplete = () =>{
    loader.hidden = true;
    quoteContainer.hidden = false;
}


getQuotes();



// Event Listener 

twitterBtn.addEventListener('click', tweetQuote)

nextQuoteBtn.addEventListener('click', newQuote)
