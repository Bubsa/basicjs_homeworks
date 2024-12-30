// Do while se izvrshuva ednash, pa posle se pominuva uslovot
// While loop is very prone to mistakes poso znaes da zborais uslov i da se napravi stack overflow
// Sve sho moze da se izvrshi so while i do while, moze da se napravi so for loop. Prethodnite dve se narecheni syntactic sugar

// const orders = [
//     {id: 1, item: "Laptop", quantity" 2}
// ]

// So While

// let validEmail = "bob@email.com";
// let email = prompt("enter valid email");
// while (email != validEmail) {
//   email = prompt("Invalid email! Try again");
// }
// console.log("Tahnks");

// // So DO WHILE
// let validEmail = "bob@email.com";
// let email = "";
// do {
//   email = prompt("enter email");
// } while (email != validEmail);
// console.log("Thanks");
// // Na porazlichen nachin go pravi istoto.

// function validateEmail () {
//     // moes da vrapuvash bilo sho vo funkcija, basically function ti e wrapper
// }

// SLICE AND SPLICE

let fruits = ["Apple", "Banana", "Cherry", "Date", "Fug"];
console.log(fruits);

//Splice methodata ja modificira originalnata niza
//Prviot argument t.e brojka e indexot od kaj sakas da pochnesh
//Vtoriot argument e brojkata na elementi sho sakas da gi izbrishesh od samata niza pochnuvajki od indexot
//Tretiot argument se novite elementi
//Sakame da izbrisheme 2 elementi pochnuvajki od Index br 1
fruits.splice(1, 2);
console.log(fruits);

// Da dodadame elementi na Index br 2
fruits.splice(2, 0, "Grape", "Watermelon");
console.log(fruits); // tuka ja pishuvame nulata posle dvojkata posho nejkeme nisho da brisheme tuku da dodademe stvari

// Da promenime element na tretiot index
fruits.splice(3, 1, "Kiwi");
console.log(fruits);

//Slice Method

let animals = ["Dog", "Cat", "Elephant", "Tiger", "Lion"];

// Ekstraktiranje na elementi od prv do tret index
// Poslednata brojka od elementot sho sakas da go zemes mora da dodades plus eden. Poso ako kazes do tret index togas ke ti go exclude-ne tretiot index
let selectedAnimals = animals.slice(1, 3);
console.log(selectedAnimals);

// Extracting elementi od vtoriot index do kraj
let lastAnimals = animals.slice(2);
console.log(lastAnimals);

// Ako sakas da napravish kopija od veke postoechka niza togas pisi si slice
let coppiedArray = animals.slice();
console.log(coppiedArray);

console.log(
  "========================================================================================================="
);
