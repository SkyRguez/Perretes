const RANDOM_DOGS_URL = "https://dog.ceo/api/breeds/image/random";
fetch(RANDOM_DOGS_URL)
  .then(function(apiResponse) {
    //console.log(apiResponse.json());
    return apiResponse.json();
  })
  .then(function(jsonResponse) {
    const img = document.createElement("img");
    img.alt = "perrito lindo";
    img.src = jsonResponse.message;
    document.querySelector(".doggos").appendChild(img);
  });
