//Hämta data
//

// Ange URL:en för JSON-data
const BASE_URL = 'https://majazocom.github.io/Data/solaris.json';
let planetData;
const allPlanets = document.querySelectorAll('.allElements')
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

const planetInfo = (planetId) => {
    const planet = planetData.find(item => item.name === planetId);
    if (planet) {
        // Här kan du visa informationen om planeten, t.ex. i en modal eller någon annan del av din webbsida
        // Koppla overlay av/på här?
        document.getElementById("overlayContainer").style.display = "block";

        console.log(planet);
    } else {
        console.log("Planet not found in data");
    }
};

allPlanets.forEach(function (planet) {
    planet.addEventListener("click", function () {
        const clickedElementId = planet.id;
        planetInfo(clickedElementId);
        /* console.log(clickedElementId); */
    })
})
/* 
function displayOn() {
    document.getElementById("overlay").style.display = "block";
}

function displayOff() {
    document.addEventListener("click", function () {
        document.getElementById("overlay").style.display = "none";
    })
}
 */
fetchData(); 