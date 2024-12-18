console.log(document); // logs the entire document (the html)

// we can access everything we keep in the document (html via the document object)
console.log(document.url);

// Pristapuvanje kon elementi preku ID

const firstParagraph = document.getElementById("first-paragraph");
console.log("First paragraph:", firstParagraph);

// Pristapuvanje kon elementi preku ime na klasa
// Sekad vrakja niza na elementi, taka da ako sakame da pristapime kon specificen element togas ni treba da vlezeme preku indexot
const explanationDivs = document.getElementsByClassName("dom-explanation");
console.log("Divs with dom-explanation class", explanationDivs);
const firstExplanationDiv = explanationDivs[0]; // ovoj primer e so index
console.log("First explanation-div element:", firstExplanationDiv);

// Pristapuvanje na elementi preku tagovi

const allParagraphs = document.getElementsByTagName("p");
console.log("All p elements:", allParagraphs);
// Ako sakas da go dobies posledniot element togas ke napravis so length
console.log("Last p tag:", allParagraphs[allParagraphs.length - 1]);

// Query selectors

// Pristapuvanje na elementi preku id's so query selector

const thirdParagraph = document.querySelector("#third-paragraph");
console.log("Third p paragraph:", thirdParagraph);
// Pristapuvanje na elementi preku ime na klasa so query selectors
// Query selector sekad vrakja prviot element sho ja ima vrednosta (ne vrakja kolekcija)
// Istoto vazi za klasi i tagovi
const domExplanationByQuerySelector =
  document.querySelector(".dom-explanation");
console.log(domExplanationByQuerySelector);

// Pristapuvanje na povekje elementi so querySelectorAll
// const listItems = document.querySelectorAll("li") // mozes vaka
// Ili mozes vaka
const listItems = document.querySelectorAll("#node-types li");
console.log("All list items:", listItems);

// Shetanje preku DOM drvceto
// Pristapuvanje kon roditel elementot

const secondParagraph = document.getElementById("second-paragraph");
const parentDiv = secondParagraph.parentElement;
console.log("Parent Div element:", parentDiv);

// Naogjanje bratche element

const nextSibling = secondParagraph.nextElementSibling;
const previousSibling = secondParagraph.previousElementSibling;
console.log("Next sibling", nextSibling);
console.log("Previous sibling", previousSibling);

// Pristapuvanje na deca u element

const listTypes = document.getElementById("node-types");
const childrenOfList = listTypes.children;
console.log("Children of list", childrenOfList);

// Pristapuvanje na poslednoto dete na element
const lastChildElement = firstExplanationDiv.lastElementChild;
console.log("Last element child", lastChildElement);

// Pristapuvanje na specificno dete na element
const secondListItem = listTypes.children[1];
console.log("Second list item:", secondListItem);
