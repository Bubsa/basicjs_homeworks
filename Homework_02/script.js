// Student exercise #3

function calculateAge (currentYear, birthYear) {
    let finalResult = currentYear - birthYear;
    console.log(`You are ${finalResult} years old`);
}

calculateAge ("2024", "1994")
calculateAge ("2024", "1900")
calculateAge ("2024", "1865")


console.log("=========================================")

// Homework part 2

function dogYear (humanYears) {
    let conversion = humanYears * 7;
    let message = console.log(`Your dog is ${conversion} years old`);
    return message;
}

dogYear (15)


console.log("=========================================")

// Homework Part 2 bonus

function humanYear (dogYears) {
    let conversion = dogYears / 7;
    let message = console.log(`Your human is ${conversion} years old`);
    return message;
}

humanYear (15)

console.log("=========================================")

// Have to have an amount of money in account
// If requesting more money, print message Not enough money in bank account
// If requesting less than max amount, it should Return with the left over amount
// Prompt should be the amount for withdrawal




function withdrawMoney () { 
    let accountBalance = 1500;
    let convertedBalance = parseInt(accountBalance);
    let inputAmount = prompt ("Enter the amount you want withdrawn");
    let convertedAmount = parseInt(inputAmount); // i dvete gi staviv kako parseInt bidejki taka gi stava kako brojki, barem u teorija

    if (convertedAmount <= 0) {
        alert ("Invalid amount, try again"); // staviv opcija da se pojavi nesho ako vrednosta e pomala od nula
        withdrawMoney(); 
    }
     else if (convertedAmount > convertedBalance) {
        alert ("Insufficient funds"); // standardno ako e pogolemo togas se pojavuva opcija
        withdrawMoney(); 
     }
     else {
        alert (`Withdrawal successful! You have withdrawn: $${convertedAmount}, Your remaining funds are $${convertedBalance - convertedAmount}`);
       
     }

}

withdrawMoney ()

