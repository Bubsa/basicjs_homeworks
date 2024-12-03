
// 1. Write a JavaScript program that calculates the total price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%. Print the result in the console.

let priceofonePhone = 119.95;
let taxRate = 0.05;
let inputValue = 30;

let beforeTax = inputValue * priceofonePhone // so ova ja dobivash cenata pred danok

let taxBreak = beforeTax * taxRate // so ova go dobivash tax od vkupnata cena

let finalValue = beforeTax + taxBreak //ova e finalnata cena so danok
console.log ("The final price is" + finalValue)


// 2. Write a JavaScript program that takes a number and increments the number by +1 and prints the result in the console.

let incrementationOne = prompt();
incrementationOne++;
console.log(incrementationOne);
// Vaka znam deka ako pisham nesho vo prompt ke bide tekst i nema smisla, taka da go ostaviv prazno za samo brojot da bide vmetnat tamu.


// 3. Write a JavaScript program that takes minutes and converts them to seconds. Print the result in the console.


let seconds = 60;
let minuteInput = prompt();
let finalSeconds = minuteInput * seconds;

console.log(finalSeconds);

// 4. Write a JavaScript program that takes the base and height of a triangle and calculates its area. Print the result in the console.

let base = prompt();
let height = prompt();
let formula = 0.5;
let endResult = formula * base * height;
let fullSentence = `The result is ${endResult} centimeters squared`;

console.log(fullSentence);

// Go napraviv istoto kako pogore. So implementiran prompt kade sto se stavaat brojkite. Samata formula ja najdov na net deka e taa.



// 5. Write a JavaScript program that takes length and width of a rectangle and finds its perimeter. Print the result in the console.

let lengthOne = 2;
let widthOne = 6;
let formulaOne = 2 * (lengthOne + widthOne);

console.log(formulaOne);

// Ja napraviv istata verzija so prompts ama radi nekoja prichina ne ni raboti


// 6. Write a JavaScript program that will calculate area of circle. Print the result in the console

let pieMeter = 3.14;
let unitsGiven = 4;
let finalScore = pieMeter * 4 * 4;

console.log(finalScore);
