// Functions n shit

function greeting() {
  console.log("Hello, welcome back!");
}
// momentalno samo e deklarirana, funkcijata niso ne pravi

greeting(); // Ova e egzekutiranje na samata funkcija

function greetUser(firstName, lastName) {
  console.log(`Hello, welcome back ${firstName} ${lastName}`);
}
// greetUser(); ako egzekutirame ke ispadnat undefined
greetUser("Bube", "Simonovikj");

//Make coffee example

function makeCofee(coffeePowder, liquid = "water") {
  let coffee = `Here is your coffee made with ${coffeePowder} and ${liquid}`;
  console.log(coffee);
}
makeCofee("arabica", "water");
makeCofee("robusta", "milk");

// Ako stavish opcija pod nekoja od opciite pogore, toa ke ti bide default kako sho e water.
// Ako da recheme ne stavis liquid koga povikuvas togas si se stava default opcija

// coffee powder i liquid se parameters, arguments se stvari ko arabica ili water

console.log("==================");

function greetUserReturn(firstName, lastName) {
  let message = console.log(`Hello, welcome back ${firstName} ${lastName}`);
  // Return ja zapira egzekucijata na kodot vnatre vo funkcijata
  return message;
}

let greetingMsg = greetUserReturn("Bube", "Simonovikj");
console.log(greetingMsg);

// Exercise addition

function sumNumber(numberOne, numberTwo) {
  let result = numberOne + numberTwo;
  console.log(result);
  return result;
}

sumNumber("1", "1");
