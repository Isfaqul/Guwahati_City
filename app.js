const h1Element = document.getElementById("h1-El");
let taglineElement = document.getElementById("tagline-el");

// event Listener

h1Element.addEventListener("mouseover", changeText);
h1Element.addEventListener("mouseout", toDefault);

// Functions

function changeText() {
  taglineElement.textContent = "The Gateway to Northeast India";
  taglineElement.style.fontFamily = "Raleway, sans-serif";
  taglineElement.style.fontWeight = "100";
}

function toDefault() {
  taglineElement.textContent = "কেবল অসমৰে নহয়, তোমাৰ মনৰো ৰাজধানী";
  taglineElement.style.fontFamily = "'NilamaniUni', sans-serif";
}
