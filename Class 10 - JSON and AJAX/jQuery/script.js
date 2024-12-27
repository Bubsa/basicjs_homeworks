function getJoke() {
  console.log("HERE");
  $.ajax({
    url: "https://api.chucknorris.io/jokes/random",
    method: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
      $(document.body).append(
        $("<h1>", {
          text: data.value,
        }),
        $("<img>", {
          src: data.icon_url,
        })
      );
    },
    error: function (error) {
      console.error(error);
    },
  });
}

// const button = document.getElementById("joke");
// console.log(button);

// button.addEventListener("click", getJoke);
$("#joke").on("click", getJoke);
