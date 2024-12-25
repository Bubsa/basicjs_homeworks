// Selektiranje na elementi
const firstHeader = document.getElementById("mainTitle");
console.log("Main title from vanilla JS", firstHeader);
// ova e wrapper niza, treba da go pristapime elementot preku indeks za da go ekstraktirame

const firstHeaderJqueryWrapper = $("#mainTitle"); // nachinot kaj sho se prepoznava deka e JQuery radi dolar znakot. So hashtag se zema id, so tochka se zema klasa
const firstHeaderJquery = firstHeaderJqueryWrapper[0];
console.log("Main title from JQuery", firstHeaderJqueryWrapper);
console.log("Main title from J Query", firstHeaderJquery);

// zemi gi site div elementi
const allDivs = $("div");
console.log(allDivs);

// Zemi go samo prviot div element no kako element na JQuery
const firstDivElement = allDivs.first();
console.log(firstDivElement); // ova e pak wrapper niza i ako treba da se ekstraktira dom elementot treba da pristapime preku indeksot
const convertedDiv = firstDivElement[0];
console.log(convertedDiv);

// Zemi go prviot div element ama kako DOM element

// const firstDivElementAsADom = allDivs[0] // mozes preku index poso all divs gi zema site divovi
const firstDivElementAsADom = allDivs.get(0); // ili preku get funkcijata
console.log(firstDivElementAsADom);

// Zemi go posledniot div element
const lastDivElement = allDivs.last();
console.log("Last div element as a JQuery", lastDivElement);

// da se ekstraktne posledniot div element kako DOM element ke treba da pristapime preku negoviot index
const lastDivElementAsADom = lastDivElement[0];
console.log("Last Div element as a DOM", lastDivElementAsADom);

// Zemi gi site elementi kako DOM
const allDivsAsADom = allDivs.get();
console.log("All divs as a DOM", allDivsAsADom);

// Zemi gi slednite ili prethodnite elementi
const secondDiv = $("#secondDiv");
const nextDiv = secondDiv.next();
const previousDiv = secondDiv.prev();
console.log("Next", nextDiv, "Previous", previousDiv);

// Naogjanje na elementi

const wrapperDiv = $(".wrapper");
console.log("Wrapper div", wrapperDiv);
const lastParagraph = wrapperDiv.find("div").find("p").last(); // Tuka se zema posledniot paragraph vnatre vo Div vraperot
console.log("Last paragraph in Div wrapper", lastParagraph.get(0));
