// Ange URL:en för JSON-data
const BASE_URL = 'https://majazocom.github.io/Data/solaris.json';
let planetData;
const allPlanets = document.querySelectorAll('.ourGalaxy')
// Gör en API-förfrågan med fetch
const fetchData = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error("Failed to load data");
        }
        const data = await response.json(); //omvandlar json till javascript object
        planetData = data;

        console.log(planetData);
    }
    catch (error) {
        console.error("Error: ", error);
    }
};

//Lägger in en eventlistener på varje DOM-element som har klassen 'allPlanets'
allPlanets.forEach(function (planet) {
    planet.addEventListener("click", function () {
        const clickedElementId = planet.id;
        console.log(clickedElementId);
        planetInfo(clickedElementId);
    });
});

//Hittar och jämför .name i objektet med #id som man klickar på
const planetInfo = (planetId) => {
    const planet = planetData.find(item => item.name === planetId);
    if (planet) {
        document.getElementById("moons").innerHTML = planet.moons.join(", ");
        document.getElementById("overlayContainer").style.display = "block";
        document.getElementById("name").innerHTML = planet.name;
        document.getElementById("latinName").innerHTML = planet.latinName;
        document.getElementById("desc").innerHTML = planet.desc;
        document.getElementById("circumference").innerHTML = planet.circumference.toLocaleString('sv-SE') + " KM";
        document.getElementById("distance").innerHTML = planet.distance.toLocaleString('sv-SE') + " KM";
        document.getElementById("tempDay").innerHTML = planet.temp.day + " C";
        document.getElementById("tempNight").innerHTML = planet.temp.night + " C";

        console.log(planet);
    } else {
        console.log("Planet not found in data");
    }
    createStars();
};


//Kopplad till onClick i html för att stänga ner overlayen med hjälp av en knapp
function closeOverlay() {
    document.getElementById("overlayContainer").style.display = "none";
}

// Skapa stjärnor funktionen
const starContainer = document.querySelector(".stars");

//Skapar ny 'stjärna'(element) på en random plats vid varje iteration
function createStars() {
    for (let i = 0; i < 99; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        starContainer.appendChild(star);
    }
}


fetchData(); 