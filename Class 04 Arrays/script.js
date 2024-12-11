// Arrays/Niza e nesho sho chuva povekje vrednosi, vo golemina i tipovi, brojki, stringovi, boolean. Mora da se otvaraat so sredni zagradi
let products = ["Laptop", "Phone", "Shoes", "Watch", "Table", "Chair"];
console.log(products);
console.log(`The type of array is ${typeof products}.`); // tipot e sekogash object

let emptyArray = [];
console.log(!!emptyArray); // Empty arrays are always truthy. Dvata izvichnici se boolean kako se pishuva

// Arrays that contain elements of different type

let mixedValuesArray = [
  1,
  "Hello World",
  false,
  "",
  null,
  7.5,
  "Bob",
  undefined,
];
console.log(
  `Array that contains elements of a different type: ${mixedValuesArray}`
); // tuka probuva da gi stavi site vrednosti vo string bidejki e pishana vo string

// Each array element has it's own index and they start from 0 incrementing by one

console.log(products[3]); //tuka ja povikuvas samata niza i go pishuvas brojot koj sakas da go pristapish
let shoes = products[2]; // tuka mozes da si napravish pak varijabla i da ja pishes vaka so toa sho mozes da si ja povikas pak ako sakas
console.log(shoes);

// Changing a value to a specfic element in the array

products[3] = "Backpack"; // ja povikuvas nizata od kaj sho sakas da go smenish, pishuvas ednakvo i ja stavash novata vrednost
console.log(products);

// Getting the length of an array

let lengthOfProducts = products.length;
console.log(`The length of the products array is ${lengthOfProducts}`); // na ovoj nachin mozes da doznaes kolkava e dolzinata na samata niza t.e kolku vrednosti ima vnatre
// toa se pravi so .length

let lastItem = products[products.length - 1]; // bidejki imas vkupno 6 vrednosti ama pochnuva od 0, najvishe ima smisla da bide minus 1 vrednost
// vaka doznavas koja e poslednata vrednost na samata niza, ne vo broj tuku vo samata vrednost
console.log(lastItem);

// Adding elements in array
// Adding a new element as last in the array can be done by using the "length"
products[products.length] = "Headphones";

// Adding elements at the end of the array
products.push("Desk"); // push si e sama funkcija po sebe sho dodava na kraj

// We can add more than one element at once
products.push("Jeyboard", "Printer");

// Adding element at the beginning of an array
products.unshift("Monitor"); // unshift dodava stvari na pochetok na niza
console.log(products);

// Removing elements in array
// Removing last element of the array using Pop
// Pop always returns the removed element
let lastProduct = products.pop();
console.log(lastProduct); // products.pop moze da si bide samo po sebe, ne ni moras da go stavas vo varijabla

// Removign first element of the array SHIFT
let firstProduct = products.shift();
console.log(products);

console.log(
  "====================================================================================================="
);

// Loops
// Looping through products array - WHILE
let productsLoops = ["Laptop", "Phone", "Shoes", "Watch", "Table", "Chair"];
let i = 0;
while (i < productsLoops.length) {
  console.log(productsLoops[i]);
  i++;
} // ciklusot pokazuva, se dodeka i t.e iterator sho pochnuva od 0 i e pomalo od celovkupnata dolzina sho e 6, se zgolemuva i za 1 se dodeka ne dojde do 6

// Exercise
console.log("====================================================");
let tenValues = [2, 5, 10, 30, 76];
let iT = 0;
let maxValue = 0;
while (iT < tenValues.length) {
  if (tenValues[iT] > maxValue) {
    maxValue = tenValues[iT];
  }
  iT++;
}
