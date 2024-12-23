// Homework #1

// function tellStory() {
//   let shortStory = ["Bube", "stressed", "learning"];
//   let name = shortStory[0];
//   let mood = shortStory[1];
//   let activity = shortStory[2];
//   console.log(
//     `This is ${name}, ${name} is very ${mood} right now because he's ${activity} how to code and sometimes it's going well but most times it's not. Please think of ${name} in your prayers. Thank you!`
//   );
// }

// tellStory();

// Homework #2

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
let myArray = [5, 10, 15, 20, 80];
console.log(sumArray(myArray));

// Homework #3

function version1() {
  // Sentence will be: Crazy? I was crazy once. They locked me in a room. A rubber room! A rubber room with rats,and rats make me crazy.
  let copyPasta = [
    "Crazy?",
    "I",
    "was",
    "once",
    "They",
    "locked",
    "me",
    "in",
    "a",
    "room",
    "rubber",
    "with",
    "rats",
    "and",
    "make",
    "crazy",
  ];
  let iE1 = version1[0]; // Crazy?
  let iE2 = version1[1]; // i
  let iE3 = version1[2]; // was
  let iE4 = version1[3]; // once
  let iE5 = version1[4]; // they
  let iE6 = version1[5]; // locked
  let iE7 = version1[6]; // me
  let iE8 = version1[7]; // in
  let iE9 = version1[8]; // a
  let iE10 = version1[9]; // room
  let iE11 = version1[10]; // rubber
  let iE12 = version1[11]; // with
  let iE13 = version1[12]; // rats
  let iE14 = version1[13]; // and
  let iE15 = version1[14]; // make
  let iE16 = version1[15]; // crazy
  console.log(
    `${copyPasta[0]} ${copyPasta[1]} ${copyPasta[2]} ${copyPasta[15]} ${copyPasta[3]}. ` +
      `${copyPasta[4]} ${copyPasta[5]} ${copyPasta[6]} ${copyPasta[7]} ${copyPasta[8]} ${copyPasta[9]}. ` +
      `${copyPasta[8]} ${copyPasta[10]} ${copyPasta[9]}! ` +
      `${copyPasta[8]} ${copyPasta[10]} ${copyPasta[9]} ${copyPasta[11]} ${copyPasta[12]}, ` +
      `${copyPasta[13]} ${copyPasta[12]} ${copyPasta[14]} ${copyPasta[6]} ${copyPasta[15]}.`
  );
}

version1();

// Homework #5
function arrAY(integers) {
  let maxValue = Math.max(...integers);
  let minValue = Math.min(...integers);
  let sum = maxValue + minValue;
  console.log("The lowest value is " + minValue);
  console.log("The highest value is " + maxValue);
  console.log("The sum is " + sum);
}
let arrayOne = [10, 2, 3, 4, 50];
arrAY(arrayOne);

function sumOfArray() {
  let arrayOne = [8, 10, 20, 5, 25];
  let arraySum = 0;
}

// Homework #4

let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    continue;
  }
  console.log(`${numbers[i]}`);
}

// Do tuka uspeav da dojdam, ne mi teknuvashe ponataka kako da stavam vo nova linija
