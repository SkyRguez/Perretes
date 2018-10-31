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
      // console.log(breeds);
      //PARA HACER: Extraer createLabel function
      const label = document.createElement("label");
      label.htmlFor = "pet-breed";
      label.innerText = "Choose a breed";
      // console.log(label);
      document.querySelector("#breed-container").appendChild(label);
      const select = document.createElement("select");
      select.id = "breed-select";
      console.log(select);
      document.querySelector("#breed-container").appendChild(select);
    });
  /*
    <section id="breed-container">
    <label for="pet-breed">Choose a breed:</label> ✅

  <select id="pet-breed">
    <option value="">--Please choose an option--</option>
  </select>
  </section>
  */
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
