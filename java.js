setup();

function setup() {
  getQuote();
}

function getQuote() {
  fetch("https://api.kanye.rest")
    .then(response => response.json())
    .then(data => updateQuote(data.quote));
}

//function updateQuote(src) {
  /* Get the quote text element */
 // let p = document.querySelector("p");
  /* Update its innerText */
  //  p.innerText = src
  //let p = document.createTextNode("p");
  /* Update its src*/

//}

/* Test for Appending */
/* var tag = document.createElement("p");
var text = document.createTextNode("Kanye says this");
tag.appendChild(text);
var element = document.getElementById("new");
element.appendChild(tag); */

function updateQuote(src) {
  //Get quote p element
  let p = document.querySelector("p");
  //Update innerText
  p.innerText = data.quote;
}