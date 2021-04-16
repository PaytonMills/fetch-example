setup();

function setup() {
  getQuote();
}

function getQuote() {
  fetch("https://api.kanye.rest?format=text")
    .then(response => response.json())
    .then(data => updateQuoteSrc(data.file));
}

function updateQuoteSrc(src) {
  /* Get the quote text element */
  let p = document.querySelector("p");
  /* Update its src*/
  p.src = src;
}