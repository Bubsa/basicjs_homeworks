console.log("Hey i'm here");

const button = document.getElementById("myButton");

function clickMe() {
  alert("You clicked me");
}

// button.onclick = clickMe(); // na ovoj nachin samata funckija se pravi pred da go kliknes kopcheto
button.onclick = clickMe; // tuka chim go stisnesh kopcheto, funkcijata se pravi

// const myDiv = document.getElementById("myDiv");
// function greeting() {
//   alert("Happy New Year");
// }
// myDiv.onmouseover = greeting;

// function goodbyeGreeting() {
//   alert("It was nice to meet you");
// }
// myDiv.onmouseout = goodbyeGreeting;
// za da ne se pojavuva sekoj pat koga se pravi hover over

const buttonEvent = document.querySelector("#buttonEvent");

// function eventListenerClick() {
//   console.log("You clicked me through the event listener");
// }

// buttonEvent.addEventListener("click", eventListenerClick); //tuka stavame deka sakame na click da se izvrshi funkcijata i samata funkcija ja stavame vo zagradite

buttonEvent.addEventListener("click", function () {
  console.log("You clicked me through the event listener");
});

const nameInput = document.getElementById("nameInput");

// nameInput.addEventListener("blur", function () { // blur eventot ti dava na klik od strana da ti se izvrshi funkcijata
//   console.log(`Hello ${nameInput.value}`);
// });

nameInput.addEventListener("input", function (event) {
  console.log(`Hello ${event.target.value}`);
});

// Exercise 1

let firstName = "General Kenobi";
const helloThere = document.getElementById("helloThere");
helloThere.addEventListener("click", function () {
  // se stava click, samata funkcija moze da bide anonimna funkcija i mu se zadava vrednosta na alertot
  alert(`Hello ${firstName}`);
});

const redDiv = document.getElementById("redDiv");

function setColorToDiv(event) {
  console.log(event.target.style);
  event.target.style.backgroundColor = "red"; // tuka se dodavaat kakvi propertinja i da sakas kako so width pod nego
  event.target.style.width = "600px";
}
redDiv.addEventListener("mousemove", setColorToDiv);
redDiv.removeEventListener("mousemove", setColorToDiv); // this completely removes the function associated to the event listener provided as the first parameter of "removeListener

const username = document.getElementById("username");
const feedback = document.getElementById("feedback");

function checkUsername(minLength) {
  // mu davas input minLength sho znachi minimum karakteri dozvoleni
  if (username.value.length < minLength) {
    // .value.length ja zema vrednosta aka tekstot i kolku e dolgo
    feedback.textContent = `Username must be at least ${minLength} characters`; // ako e pomalo togas ja dava vo prazniot p tag ovaa poraka
  } else {
    // ako ne go ispolnuva togas ne pisuva niso
    feedback.textContent = "";
  }
}
username.addEventListener("blur", function () {
  // vo add event listener stavame blur (za da klikneme nadvor or inputot) i ja stavame funkcijata so zadadenata brojka na minimum karakteri
  checkUsername(5);
});

document.getElementById("parent").addEventListener("click", function () {
  alert(`Parent Divclicked!`);
});

document.getElementById("child").addEventListener("click", function (event) {
  alert("Child div clicked");
  event.stopPropagation(); // chim ova se naogja vo drug element samata metoda go stopira iniciranjeto na toa sho e nad nego
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(event);
  alert(`Form submission prevented`);
});

document.getElementById("butOne").addEventListener("click", function (event) {
  let pElem = document.getElementById("parOne");
  pElem.style.backgroundColor = "red";
  pElem.style.width = "300px";
  pElem.style.color = "yellow";
});
