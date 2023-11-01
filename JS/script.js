//Hämta data
//

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
        console.log(data);

    }
    catch (error) {
        console.error("Error: ", error);
    }
};

allPlanets.forEach(function (planet) {
    planet.addEventListener("click", function () {
        const clickedElementId = planet.id;
        planetInfo(clickedElementId);
        /* console.log(clickedElementId); */
    })
});

const planetInfo = (planetId) => {
    const planet = planetData.find(item => item.name === planetId);
    if (planet) {
        // Här kan du visa informationen om planeten, t.ex. i en modal
        // Koppla overlay av/på här?
       /*  const moonNames = planet.moons.map((element) => (element)); */
        /* const moonElem =  */document.getElementById("moons").innerHTML = planet.moons.join(", ");
        /* moonElem.innerHTML = moonNames.join(", "); */
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
};



function closeOverlay() {
    document.getElementById("overlayContainer").style.display = "none";
}

// Skapa stjärnor funktionen
const starContainer = document.querySelector(".stars");

function createStars() {
    for (let i = 0; i < 58; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        starContainer.appendChild(star);
    }
}

createStars();



fetchData(); 