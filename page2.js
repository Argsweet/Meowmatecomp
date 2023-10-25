const card = document.getElementById("card");
const swipeLeft = document.getElementById("swipeLeft");
const swipeRight = document.getElementById("swipeRight");
const detailsButton = document.getElementById("detailsButton");
const addToFavoritesButton = document.getElementById("addToFavoritesButton");
const favoritesButton = document.getElementById("favoritesButton");
const favoritesList = document.getElementById("favoritesList");
const favoriteCats = [];

innerHTML = name;

const catData = [
  {
    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/66641523/2/?bust=1696481181&width=720",
    name: "Dusk",
    age: "Kitten",
    pattern: "Tortoiseshell",
    color: "Black/Brown",
    personality: "Sweet, Playful, Loves to be Carried",
    location: "Irvine, CA",
    gender: "Female",
    fee: "$175",
    info: "https://www.petfinder.com/cat/dusk-66641523/ca/irvine/oc-arc-orange-county-animal-rescue-coalition-ca599/",
  },
  {
    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64435429/1/?bust=1684122444&width=720",
    name: "Daisy",
    age: "Kitten",
    pattern: "Tabby",
    color: "White, Gray, Blue, Silver",
    personality: "Playful, Affectionate, Independent, Smart",
    location: "Long Beach, CA",
    gender: "Female",
    fee: "N/A",
    info: "https://www.petfinder.com/cat/daisy-sweet-playful-daisy-64435429/ca/long-beach/summer-rescue-ca2174/",
  },
  {
    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/68965532/1/?bust=1697587014&width=720",
    name: "Biggie and Barbie",
    age: "Kitten",
    pattern: "Tabby",
    color: "Black, White, Brown",
    personality: "Cuddly and Friendly",
    location: "Long Beach, CA",
    gender: "Male and Female",
    fee: "N/A",
    info: "Must be Adopted together. Biggie has an eye infection. https://www.petfinder.com/cat/biggie-and-barbie-68965532/ca/long-beach/long-beach-spay-neuter-ca759/",
  },
  {
    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69005789/2/?bust=1695493278&width=720",
    name: "Coco/Nouget",
    age: "Kitten",
    pattern: "Bicolor",
    color: "Black/White",
    personality: "Loyal, Affectionate, Playful, Couch Potato",
    location: "Glendale, CA",
    gender: "Male",
    fee: "Exists but is not listed",
    info: "https://www.petfinder.com/cat/coco-69005789/ca/glendale/paws-fur-hope-ca2881/",
  },
  {
    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64176151/1/?bust=1683673671&width=720",
    name: "Sweetie and Boy-Boy",
    age: "Young Teens",
    pattern: "Sweetie is a Torbie, Boy-Boy is Bicolor",
    color: "Sweetie is Black, White, Gray, and Brown; Boy-Boy is Gray and White",
    personality: "Sweetie: Shy, Quiet; Boy-Boy: Cuddly",
    location: "La Canada, CA",
    gender: "Female and Male",
    fee: "Exists but is not listed",
    info: "https://www.petfinder.com/cat/sweetie-64176151/ca/la-canada/happy-strays-rescue-ca1234/ https://www.petfinder.com/cat/boy-boy-64176178/ca/la-canada/happy-strays-rescue-ca1234/",
  },
  {
    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69005789/2/?bust=1695493278&width=720",
    name: "Veronica",
    age: "Young Teen",
    pattern: "Pointed Siamese",
    color: "Brown/White",
    personality: "Protective, social, affectionate, easy-going, playful, and smart",
    location: "Burbank, CA",
    gender: "Female",
    fee: "N/A",
    info: "https://www.petfinder.com/cat/veronica-69387901/ca/burbank/burbank-animal-shelter-ca762/",
  },
  {
    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69299371/6/?bust=1697297411&width=720",
    name: "Minnie",
    age: "Adult",
    pattern: "Bicolor",
    color: "Grey/White",
    personality: "Well Behaved, calm, cuddly, playful, and smart",
    location: "Burbank, CA",
    gender: "Female",
    fee: "N/A",
    info: "https://www.petfinder.com/cat/minnie-69299371/ca/burbank/burbank-animal-shelter-ca762/",
  },
  {
    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69301272/6/?bust=1697305785&width=720",
    name: "Manny",
    age: "Adult",
    pattern: "Solid",
    color: "Black",
    personality: "Funny, Cuddly, and Playful Purr Engine",
    location: "Burbank, CA",
    gender: "Male",
    fee: "N/A",
    info: "https://www.petfinder.com/cat/manny-69301272/ca/burbank/burbank-animal-shelter-ca762/",
  },
  {
    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63554062/2/?bust=1682641758&width=720",
    name: "Shiro",
    age: "Adult",
    pattern: "Pointed Siamese",
    color: "White, Ivory, Cream",
    personality: "Affectionate, Quiet",
    location: "Irvine, CA",
    gender: "Male",
    fee: "$175",
    info: "https://www.petfinder.com/cat/shiro-63554062/ca/irvine/oc-arc-orange-county-animal-rescue-coalition-ca599/",
  },
  {
    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/68649479/3/?bust=1693430592&width=720",
    name: "Mr. Moo",
    age: "Kitten",
    pattern: "Bicolor",
    color: "Black/White",
    personality: "Playful, Affectionate, Brave, and Curious",
    location: "Los Angeles, CA",
    gender: "Male",
    fee: "N/A",
    info: "https://www.petfinder.com/cat/mr-moo-68649479/ca/los-angeles/the-cats-meow-animal-rescue-ca2281/",
  },
  {
    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69408448/1/?bust=1698078412&width=720",
    name: "Snow White",
    age: "Kitten",
    pattern: "Siamese Ragdoll",
    color: "Ivory/Cream",
    personality: "Quiet, Loyal, Gentle, Friendly, Affectionate, and Loves Kisses",
    location: "Los Angeles, CA",
    gender: "Female",
    fee: "N/A",
    info: "https://www.petfinder.com/cat/snow-white-25mo-69408448/ca/los-angeles/i-do-not-own-a-cat-ca3147/",
  },
  {
    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65584765/3/?bust=1690250629&width=720",
    name: "Cora",
    age: "Young Adult",
    pattern: "Torbie",
    color: "Brown/White",
    personality: "Super Friendly Coach Potato, Cuddly, Playful, Loyal, Quiet, and Loves Kisses",
    location: "Los Angeles, CA",
    gender: "Female",
    fee: "N/A",
    info: "https://www.petfinder.com/cat/cora-super-friendly-65584765/ca/los-angeles/i-do-not-own-a-cat-ca3147/",
  },
  {
    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56431635/3/?bust=1662590554&width=720",
    name: "Zoe",
    age: "Senior",
    pattern: "Solid Turkish Angoral",
    color: "White",
    personality: "Loves Attention, hungry, sweet, and gentle",
    location: "Los Angeles, CA",
    gender: "Female",
    fee: "N/A",
    info: "https://www.petfinder.com/cat/zoe-56431635/ca/los-angeles/luxe-paws-ca2031/",
  },
  {
    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54746233/5/?bust=1669069175&width=720",
    name: "Mazzy and Waldo",
    age: "Kittens",
    pattern: "Bicolor Burmese",
    color: "Black/White",
    personality: "Affectionate, Playful, Curious",
    location: "Los Angeles, CA",
    gender: "Female and Male",
    fee: "N/A",
    info: "https://www.petfinder.com/cat/mazzy-and-waldo-54746233/ca/los-angeles/luxe-paws-ca2031/",
  },
  // Add more data objects as needed
];




let currentCatIndex = 0;

function loadCatData(index) {
    const cat = catData[index];
    if (cat) {
        card.innerHTML = `
            <img src="${cat.image}" alt="Cat">
            <h2>${cat.name}</h2>
            <p>Age: ${cat.age}</p>
            <p>Pattern: ${cat.pattern}</p>
            <p>Color: ${cat.color}</p>
            <p>Personality: ${cat.personality}</p>
            <p>Location: ${cat.location}</p>
            <p>Gender: ${cat.gender}</p>
            <p>Adoption Fee: ${cat.fee}</p>
            <p>More Info: ${cat.info}</p>
`;
    } else {
        card.innerHTML = "No more cats to swipe!";
        swipeLeft.disabled = true;
        swipeRight.disabled = true;
    }
}
function addCatToFavorites(cat) {
  if (!favoriteCats.includes(cat)) {
    favoriteCats.push(cat);
    updateFavoritesList();
  }
}

function updateFavoritesList() {
  favoritesList.innerHTML = "";
  favoriteCats.forEach((cat) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<button class="favorite-cat">${cat.name}</button>`;
    favoritesList.appendChild(listItem);
  });
}

loadCatData(currentCatIndex);

swipeLeft.addEventListener("click", () => {
    const card = document.getElementById("card");
    card.style.transform = "translateX(-100%)";
    card.style.transition = "transform 0.5s ease-in-out";

    setTimeout(() => {
        currentCatIndex++;
        loadCatData(currentCatIndex);
        card.style.transform = "translateX(0)";
        card.style.transition = "none";
    }, 500); // Adjust the time based on your animation duration
});

swipeRight.addEventListener("click", () => {
    const currentCat = catData[currentCatIndex];
    if (currentCat) {
        // Add the current cat to favorites
        addCatToFavorites(currentCat);
    }

    // Perform the swipe animation
    const card = document.getElementById("card");
    card.style.transform = "translateX(100%)";
    card.style.transition = "transform 0.5s ease-in-out";

    setTimeout(() => {
        currentCatIndex++; // Update the currentCatIndex
        loadCatData(currentCatIndex); // Load the next cat
        card.style.transform = "translateX(0)";
        card.style.transition = "none";
    }, 500); // Adjust the time based on your animation duration
});

const resetButton = document.getElementById("resetButton");

// Event listener for the "reset" button
resetButton.addEventListener("click", () => {
    currentCatIndex = 0;
    loadCatData(currentCatIndex);
});

favoritesButton.addEventListener("click", () => {
  updateFavoritesList();
});

// Event listener to navigate back to a favorite cat's card
favoritesList.addEventListener("click", (event) => {
  if (event.target.classList.contains("favorite-cat")) {
    const catName = event.target.innerText;
    const favoriteCatIndex = favoriteCats.findIndex((cat) => cat.name === catName);
    if (favoriteCatIndex !== -1) {
      loadCatData(catData.indexOf(favoriteCats[favoriteCatIndex]));
    }
  }
});