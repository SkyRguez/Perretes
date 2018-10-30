start();

function start() {
  document.querySelector(".add-doggo").addEventListener("click", onClick);
}

function onClick() {
  const RANDOM_DOGS_URL = "https://dog.ceo/api/breeds/image/random";
  fetch(RANDOM_DOGS_URL)
    .then(toJson)
    .then(function(jsonResponse) {
      const img = document.createElement("img");
      img.alt = "perrito lindo";
      img.src = jsonResponse.message;
      document.querySelector(".doggos").appendChild(img);
    });
}

function toJson(apiResponse) {
  //console.log(apiResponse.json());
  return apiResponse.json();
}
