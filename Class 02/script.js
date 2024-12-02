console.log("Hello from script.js");

let x = "Hello World";
console.log(typeof x);

//Strings

console.log("Hello" + " " + "G3");

let helloGreeting = "Hello";
let qaLocation = "from Qinshift Academy";

let greeting = helloGreeting + " " + qaLocation;

console.log(greeting);

//numbers with strings

let firstNumber = "10";
let secondText = "example";

let mixedResult = firstNumber + secondText;
console.log(mixedResult);

//converting numbers into strings

let number1 = 10;
let number2 = "12"; //ova e string

let numberResult = number1 + number2; //prichinata zasho vo konzola iskacha kako spojka od dvete brojki e bidejki ednata e brojka a drugata string
console.log(typeof numberResult);
console.log(numberResult);

let academyName = "Qinshift Academy";
let groupNumber = "G3";
let fullSentence = `I'm a student in ${academyName} in group ${groupNumber}`;

console.log(fullSentence);

let greetMessage = "Hello I"; //m najpametno e da ne se koristat mali navodnici bidejki nema da go prikaze ko sho treba tuku samo 'Hello i'. Najpametno e koristenje na ona pod esc ili golemi navodnici

let greetMessageOne = "Hello i'm Bube";

let firstName = null;
let lastName = "Simonovikj";

console.log(firstName + lastName); //samata vrednost e null i go chita kako string

firstName = "Bube"; // ako redeklarirame vrednosta od null vo moeto ime togas ke si bide ok
console.log(firstName + lastName);

console.log(
  "==============================================================================================================="
);

// special numbers

let numberOperationOne = 1 / "test"; // bidejki nema logika ovaa funkcija, samata funkcija kazuva deka e NotANumber
console.log(numberOperationOne);
console.log(typeof numberOperationOne); // ako go pobaras samiot tip na ova ke iskoci deka e broj, zbunuvacko neli

console.log(numberOperationOne == NaN); //ako pobaras ova dali e ednakvo na NaN togas samata boolean funkcija (vrakja true ili false) vrakja deka e false

console.log("=======================================================");

//Logical operators

let comparator1 = 50;
let comparator2 = 80;

console.log(comparator1 === comparator2);
console.log(comparator2 > comparator1);

let comparator3 = 55;
let comparator4 = "55";

console.log(comparator3 == comparator4); //iako brojkata e ista javascript pak si ja vadi kako brojka i ti iskaca true (not do this)
console.log(comparator3 === comparator4); // tuka vekje gi zema po value i type (do this)

let numOne = 5;
let numTwo = 10;
let numThree = 15;
let numFour = 15;

let expressionResult = numOne + numTwo >= numThree + numFour;
console.log(expressionResult);

let expressionResult2 = numTwo + numFour >= numOne + numThree;
console.log(expressionResult2);
