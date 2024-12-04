let input = prompt("Enter a number from 1 to 7");
let parsedInput = parseInt(input); // Gore od string go menja vo type number/integer
// let input = parseInt (prompt("Enter a number from 1 to 7")); ova ti e drugshie verzija od toa gore, taa gore e podobra

// Grouping cases with Switch

switch (input) {
  case 1:
    console.log("Monday"); //koja brojka i da ja pishes ke gi ispishe tie sho sleduvaat posle nego
    break; // chim pishes break togas go printa samo brojot sho e pishan i nisho drugo
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("You entered an invalid number");
    break;
}

console.log("=================================");
