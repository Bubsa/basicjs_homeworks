const fruits = ["apple", "banana", "orange"];
console.log(`My favorite fruits are ${fruits[0]}, ${fruits[1]}, ${fruits[2]}`);
const joinedFruits = fruits.join(" and "); // join funkcijata e shorthand umesto forloop za da najde informacii od nizata i da gi prilozi
// vo samata zagrada posle join pishuva and, toa znaci deka posle sekoj zbor da dodade prazno mesto pa zborot and i pak prazno mesto
console.log(joinedFruits);
console.log(`My favorite fruits are ${joinedFruits}.`);

console.log("===============String Methods=====================");

const paragraph =
  "Javascript is amazing. It is versatile and powerful. Developers (not all of them) love it!";
const sentences = paragraph.split("."); // split e metoda shto podeluva eden string na povekje stringovi
// mora da se chuva negde taa niza na rechenici, zatoa pravime varijabla u ovoj sluchaj sentences. Posle split se stava tocka sho znaci deka posle sekoja tochka se pochnuva nova rechenica i se tera taka
console.log(sentences);

// toUpperCase() and toLowerCase

const greeting = "Hello World";
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

// length finds the length of the string

const lectureName = "Basic Javacript";
console.log(lectureName.length);

// trim(), trims the whitespaces at the beginning and at the end of the string
const username = "           my username            ";
console.log(username);
console.log(username.trim());

// charAt(), it accesses a specific character in a string using its index

const phrase = "My name is Ljubomir";
console.log(phrase.charAt(0));
console.log(phrase.charAt(100)); // bidejki nema vakov index niso ne ni vrakja

console.log("===================================================");

// 2nd exercise

let number = 5;
let boolean = true;
let string = "Hello";
let array = [""];
let null1 = null;

console.log(typeof number);
console.log(typeof boolean);
console.log(typeof string);
console.log(typeof array);
console.log(typeof null1); // ne znam kako se pravi ova

// 3rd exercise

function numberOne(inputNumber) {
  let result = inputNumber - 13;
  if (inputNumber > 13) {
    console.log(result * 2); // moes da iskoristish so return, ne ni moras console.log nitu ti treba else
  } else {
    // tuka mozes da stavis return di
    console.log(result);
  }
}
numberOne(18);

// 4th exercise

function closerTo(input1, input2) {
  let numberD = 100;
  if (input1 < 0 || input2 < 0) {
    console.log("This is a negative number");
  } else if (numberD - input1 < numberD - input2) {
    console.log(`${input1} is closer to 100`);
  } else {
    console.log(`${input2} is closer to 100`);
  }
}

closerTo(80, 20);

// 5th exercise

let salary = 1000;
let rent = 375;
let bills = 250;
function moneyLeft() {
  return salary - rent - bills;
}

console.log(moneyLeft());

// 6th exercise

let math = 6;
let science = 7;
let english = 5;
let sport = 9;
let chemistry = 5;

// function average() {
//   return math + science + english + sport + chemistry;
// }
// if (average / 5 < 8) {
//   alert("YOU FAILED");
// } else {
//   alert("YOU PASSED");
// }

// 7th exercise

function divisons(inputOne) {
  // prichinata zasho ne raboti e poso prviot uslov e dobiten i nema prichina zasho da tera ponataka. Prvo treba najspecifichniot uslov da go proveri
  //pa posle da si tera do po generalnite
  if (inputOne % 3 === 0 && inputOne % 7 === 0) {
    console.log("FizzBuzz");
  } else if (inputOne % 3 === 0) {
    console.log("Fizz");
  } else if (inputOne % 7 === 0) {
    console.log("Buzz");
  } else {
    console.log("FizzBuzz");
  }
}
divisons(9);

// 8th exercise

const arrayOne = [
  "Don't",
  "hate",
  "me",
  "cuz",
  "im",
  "beautiful",
  "maybe",
  "if",
  "you",
  "got",
  "rid",
  "of",
  "that",
  "yeeyee",
  "ass",
  "haircut",
];

const jointWords = arrayOne.join(" ");
console.log(jointWords);
