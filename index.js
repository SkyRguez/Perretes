document.querySelector(".add-doggo").addEventListener("click", onCLick);

function onCLick(_event) {
  const RANDOM_DOGS_URL = "https://dog.ceo/api/breeds/image/random";
  fetch(RANDOM_DOGS_URL)
    .then(function(apiResponse) {
      //console.log(apiResponse.json());
      return apiResponse.json();
    })
    .then(function(jsonResponse) {
      console.log(jsonResponse.message);
      const img = document.createElement("img");
      console.log(img);
      img.alt = "Perrito bonito";
      console.log(img);
      img.src = jsonResponse.message;
      console.log(img);

      document.querySelector(".doggos").appendChild(img);
    });
}
