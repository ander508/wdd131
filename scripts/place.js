const currentYear = new Date().getFullYear();
const thisYear = document.querySelector("#currentYear");
thisYear.innerHTML = currentYear;

const lastModified = document.querySelector("#lastModified");
let oLastModif = new Date(document.lastModified);
lastModified.innerHTML = `Last Modified: ${oLastModif.toLocaleString()}`;



let temperature = 10; 
let windSpeed = 5; 

// Function to calculate wind chill in Celsius
function calculateWindChill(temp, windSpeed) {
    // Wind Chill formula for Celsius
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

function displayWindChill() {
    let windChill;

    // Viable conditions: Temperature <= 10°C and Wind Speed > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed).toFixed(1); // Rounded to 2 decimals
    } else {
        windChill = "N/A"; 
    }

    document.getElementById("windchill").textContent = `${windChill}°C`;
}

window.onload = displayWindChill;