const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

const dogContainer = document.querySelector(".doggos");

function onClick() {
  const dogPromise = fetch(RANDOM_DOG_URL);

  dogPromise.then(response => response.json()).then(function(json) {
    console.log(json);
    console.log(json.message);

    const img = document.createElement("img");
    img.src = json.message;
    img.alt = "perrito bonito";

    dogContainer.appendChild(img);
  });
}

document.querySelector(".add-doggo").addEventListener("click", onClick);
