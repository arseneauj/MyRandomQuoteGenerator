// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//These arrays will store the quotes in objects containing their information
var quotes = [{
  quote : 'Logic will get you from a to z; imagination will take you everywhere.',
  source : 'Albert Einstein'
},
{
  quote : 'It is better to travel well than to arrive.',
  source : 'Buddha'
},
{
  quote : 'Life is really simple, but we insist on making it complicated.',
  source : 'Confucius'
},
{
  quote : 'Action express priorities',
  source : 'Mahatma Gandhi'
},
{
  quote : 'The secret of getting ahead is getting started.',
  source : 'Mark Twain'
},];

function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}

//We create a function to get a random number which will choose a random quote out of the 5, but will not work if there isn't a quote
function getRandomQuote(){
var RandomNumber = Math.floor(Math.random() * quotes.length);
//Here we choose our random quote
var UsedQuote = quotes[RandomNumber];
return UsedQuote
}

//Function that takes the correct array and object and prints it out in the supplied tempelate
function printQuote(){

  var quotes = getRandomQuote();
  message ='<p class="quote">' + quotes.quote + '</p>';
  message  += '<p class="source">' + quotes.source + '</p>';
  print(message);
}
