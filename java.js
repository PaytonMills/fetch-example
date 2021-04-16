setup();

function setup() {
  getQuote();
}

function getQuote() {
  fetch("https://api.kanye.rest")
    .then(response => response.json())
    .then(data => updateQuoteSrc(data.file));
}

function updateQuoteSrc(src) {
  /* Get the quote text element */
  p.innerText()
  //let p = document.createTextNode("p");
  /* Update its src*/
  //p.src = src;
}

/* Test for Appending */
var tag = document.createElement("p");
var text = document.createTextNode("Kanye says this");
tag.appendChild(text);
var element = document.getElementById("new");
element.appendChild(tag);