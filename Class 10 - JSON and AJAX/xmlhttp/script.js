console.log("Hello");

// Kako se pravi json file
// Prvo pochnuvame so obichen object aka array
const user = {
  name: "John",
  age: "30",
};
console.log("regular js object", user);

// Posle toa go stringifisirame so stringify
const jsonString = JSON.stringify(user);
console.log("strigified json", jsonString);

//Ako sakame da go vratime nazad togas koristime parse
const parsedObject = JSON.parse(jsonString);
console.log("parsed json", parsedObject);
//vaka mozes da baras specificni stvari vo objektot
console.log(parsedObject.name);

// Old school way
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.chucknorris.io/jokes/random");

xhr.onload = function () {
  if (xhr.status !== 200) {
    // brojkata 200 treba da bide pingot sho go dobivas nazad deka serverot e ok
    console.error(`Error ${xhr.status}: ${xhr.statusText}`); //site xhr stvari sho se se preku samoto toa sho se bara, ne gi deklarirame nigde
    return;
  }
  const joke = JSON.parse(xhr.responseText); // ja parsirash shegata vo od stringificirana vo objekt
  console.log(joke);
  document.body.innerHTML = `<h1>${joke.value}</h1> 
  <img src="${joke.icon_url}">`; // tuka vo samiot html dokument gi dodavash value i icon url poso toa se values na samiot json file ako otides i vidis vo konzola
};
xhr.onerror = function () {
  console.error("Network Error"); // ako ima nekakva greshka togas ova ti se pojavuva
};

xhr.send(); // tuka ja povikuvas funkcijata
