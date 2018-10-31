start();

function start() {
  document.querySelector(".add-doggo").addEventListener("click", onClick);
  document
    .querySelector(".list-doggo")
    .addEventListener("click", onClickBreeds);
}

function onClick() {
  const RANDOM_DOGS_URL = "https://dog.ceo/api/breeds/image/random";
  fetch(RANDOM_DOGS_URL)
    .then(toJson)
    .then(toJsonResponse);
}
function onClickBreeds(_event) {
  console.log(_event);
}

function toJson(apiResponse) {
  return apiResponse.json();
}

function toJsonResponse(jsonResponse) {
  function makeImageFrom(dogUrl) {
    const image = document.createElement("img");
    img.alt = "perrito lindo";
    img.src = dogUrl;
    return image;
  }
  const img = makeImageFrom(jsonResponse.message);
  document.querySelector(".doggos").appendChild(img);
}
