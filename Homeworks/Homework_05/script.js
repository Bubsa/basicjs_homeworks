// Exercise 1 i Homework Part 1 gi staviv vo istiot kod bidejki e istiot index page

// Select the first Div i otidov so ID verzijata
const firstDiv = document.getElementById("first");
console.log("First Div is:", firstDiv);

// Select all paragraphs
const allParagraphs = document.getElementsByClassName("paragraph");
console.log("These are all the paragraphs:", allParagraphs);

// Select the last Div
// Malce me zbuni faktot deka nema nitu klasa nitu id. Probav da go selektiram sredniot div no ne mi davase previous/next element sibling poradi nekoja pricina i otidov so ovaa opcija na kraj
const allDivs = document.querySelectorAll("div");
console.log(allDivs[allDivs.length - 1]);

// Select the h3 in the last div
// Bidejki e edinstveniot h3 bese no brainer ovaa opcija
const lastHeader = document.querySelector("h3");
console.log("This is H3 in the last div", lastHeader);

// Select the h1 in the last div
const allHeaderOnes = document.getElementsByTagName("h1");
console.log(allHeaderOnes[1]);

// Get the text from the first paragraph in the second div
const secondPar = document.getElementsByClassName("paragraph second")[0];
console.log("The text is", secondPar.textContent);

// Add the word "text" to the text element in the second div

const textElement = document.querySelector("text");
console.log(textElement.textContent);
textElement.textContent += "text. But are we sure that it's about that?";

// Change the text of the header 1 in the last div
allHeaderOnes[1].textContent =
  "Reality is often disapointing, that is...It Was";

// Change the text of the header 3 in the last div
lastHeader.textContent = "Now, reality can be whatever i WANT";

// Exercise #2

let finalResult;

function weightInChickens() {
  let inputKilos = prompt("Enter how much you weigh in kilograms");
  let convertedKilos = parseInt(inputKilos);
  finalResult = convertedKilos / 0.5;
  console.log(finalResult);
}

weightInChickens();

let finSumChick = document.getElementById("lospollos");
finSumChick.textContent += ` ${finalResult} kilograms`;

// Homework Part 1
// Idam od gore nadole
let firstTitle = document.getElementById("myTitle");
firstTitle.textContent =
  "This doc better be called Tupac, cuz all it sees is changes";

let firstPar = document.getElementsByClassName("paragraph")[0];
firstPar.textContent =
  "Wake up in the mornin' and i ask myself, is life worth living or should i blast myself";

secondPar.textContent = "I have changed this text as well";

// Homework Part 2
let numArr = [4, 5, 5, 2, 16, 8];
let baseLevel = "";

for (let i = 0; i < numArr.length; i++) {
  baseLevel += `<li>${numArr[i]}</li>`;
}
document.getElementById("shopping").innerHTML = baseLevel;

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
// Momentalno raboti i mislam deka ima smisla? Ne znaev kako da ja vmetnam sumata vo samiot <p> tag ama ispadna deka moze so $ nachinot
let finalSum = document.getElementById("resultings");
finalSum.textContent += ` ${sumArray(numArr)}`;
