// Ange URL:en för JSON-data
const BASE_URL = 'https://majazocom.github.io/Data/solaris.json';

// Gör en API-förfrågan med fetch
fetch(BASE_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error fetching data');
        }
        return response.json(); // Parsa JSON-svaret
    })
    .then(data => {
        // Använd data från JSON
        console.log(data); // Logga data till konsolen
    })
    .catch(error => {
        console.error('Fel:', error); // Logga eventuella fel till konsolen
    });