// Po star primer

//  function getJoke() {
//   fetch("https://api.chucknorris.io/jokes/random") // tuka go baras url-ot na samiot source na jokes
//     .then((response) => response.json()) // preku ova zema ja zema stringificirana datata i ja stava parsirano. Response ti e nesho sho ti si go imenuvas isto kako i data podole
//     .then((data) => {
//       // togas ovaa data ja prevzema od toa gore i moes da ja stavish
//       console.log(data);
//       document.getElementById("jokes-container").innerHTML = data.value; // so ovaa linija ja stavash vo samiot div za da se prikazuvaat
//     })
//     .catch((error) => console.log(error));
// }

// document.getElementById("joke").addEventListener("click", getJoke);

// Ova se vika asinkrona funkcija. Toa znaci deka asinhrono im dzitka pingovi na API's i koja stigne taa se prikazuva

async function getJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random"); // Koga vo konzola ti kazuva readableStream znaci deka e vo proces i e neostvareno
    const data = await response.json(); // ovie dve linii kod se sekogash isti, tuka se parsira
    console.log(response);
    console.log(data);
    document.getElementById("jokes-container").innerHTML = data.value; // so ova gi stavash na samiot div za da se prikazat na stranicata
  } catch (error) {
    console.error(error);
  }
}
document.getElementById("joke").addEventListener("click", getJoke);

async function getChar() {
  try {
    const response = await fetch("https://swapi.py4e.com/api/people/1/");
    const data = await response.json();
    console.log(response);
    console.log(data);
    document.getElementById(
      "characterHere"
    ).innerHTML = `<h1>${data.name}</h1> <h2>${data.height}</h2> <h3>${data.mass}</h3>`;
  } catch (error) {
    console.error(error);
  }
}
document.getElementById("starWars").addEventListener("click", getChar);
