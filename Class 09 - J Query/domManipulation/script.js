// Manipulacija na DOM elementi

// Menjanje na tekstot na prviot paragraph preku obichna DOM manipulacija

const firstParagraph = document.getElementById("firstParagraph");
firstParagraph.textContent = "This is updated text content using Vanila JS";

// Istoto ko pogore samo preku JQuery
let secondParagraphText = $("#secondParagraph").text();
console.log("Second paragraph text content", secondParagraphText);
$("#secondParagraph").text("This is updated text using JQuery");

// Dodavanje i odzemanje klasi dinamichki
// Dodaj klasa na prviot div element
// Preku DOM

const firstDiv = document.getElementById("firstDiv");
firstDiv.classList.add("highlight");

// Dodavanje klasa na prviot div element
// Preku JQuery

$("#secondDiv").addClass("focus");

// Event listeners preku vanila JS

const firstButton = document.getElementById("firstButton");
firstButton.addEventListener("click", function () {
  firstButton.textContent = "Clicked using vanila JS";
});

// Istoto gore ama so JQuery
// const secondButton = $("#secondButton")
$("#secondButton").on("click", function () {
  $(this).text("Clicked using JQuery");
});

// tuka samo go stavash klik i samo funkcijata ja stavas
let button = $("#lastButton");
button.click(function () {
  console.log("Last buton was clicked");
});

// Krienje i pokazuvanje na elementi

// Da se skrie prviot paragraph so vanilla JS
// preku ova ne samo shto go snema tekstot tuku i mestoto sho go zavzema go snemuva
firstParagraph.style.display = "none";

// Da se skrie vtoriot paragraph so JQuery
$("#secondParagraph").hide();

// Rabotenje so inner html
// Zemi inner HTML na prviot header so Vanilla JS
const headerInnerHTMLVanillaJs =
  document.getElementsByClassName("header")[0].innerHTML;
console.log("Inner HTML Vanilla JS", headerInnerHTMLVanillaJs);

// Istoto pogore ama preku JQuery

const headerInnerHTMLjQuery = $(".header").html();
console.log("Inner HTML jQuery", headerInnerHTMLjQuery);

// Setiraj inner HTML so jQuery
$(".header").html("<h1> This is a new header set through jQuery </h1>");

// Rabotenje so CSS
// Zemi i postavi CSS properties so vanilla JS
// const headerColorVanilla = (document.getElementsByClassName(
//   "secondHeader"
// )[0].style.color = "blue");

// Istoto ama so JQuery
$(".secondHeader").css("color", "blue");

// Dodavanje elementi
// Dodavanje paragraph pred prviot header preku JQuery
$("h1")
  .first()
  .before("<p>This is a new paragraph added before the h1 element</p>");
