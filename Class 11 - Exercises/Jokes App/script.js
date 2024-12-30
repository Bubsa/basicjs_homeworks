function Joke(type, setup, answer) {
  (this.type = type), (this.question = setup);
  this.answer = punchline;
  this.getJoke = function () {
    return `${this.question} \n ${this.answer}`;
  };
}

async function getJokesData() {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/jokes/programming/ten"
    );
    const data = await response.json();
    console.log(response);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
document.getElementById("fetchJokes").addEventListener("click", getJokesData);

function transformData() {
  for (let i = 0; i < getJokesData.length; index++) {
    const element = getJokesData[i];
  }
}
