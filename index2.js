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
  const LIST_DOGS_URL = "https://dog.ceo/api/breeds/list/all";
  fetch(LIST_DOGS_URL)
    .then(toJson)
    .then(function(jsonResponse) {
      const breeds = jsonResponse.message;
      console.log(breeds);
    });
  /*
    <section id="breed-container">
    <label for="pet-breed">Choose a breed:</label>

  <select id="pet-breed">
    <option value="">--Please choose an option--</option>
    <option value="dog1">Chihuahua</option>
    <option value="dog2">Dalmata</option>
    <option value="dog3">Bullterrier</option>
    <option value="dog4">Bulldog</option>
    <option value="dog5">Rottweiler</option>
    <option value="dog6">Husky</option>
  </select>
  </section>*/
}

function toJson(apiResponse) {
  return apiResponse.json();
}

function makeImageFrom(dogUrl) {
  const img = document.createElement("img");
  img.alt = "perrito lindo";
  img.src = dogUrl;
  return img;
}

function toJsonResponse(jsonResponse) {
  console.log(jsonResponse.message);
  const img = makeImageFrom(jsonResponse.message);
  document.querySelector(".doggos").appendChild(img);
}
