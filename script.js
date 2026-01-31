// --- ELEMENTS ---
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector("#searchBtn");
const weatherIcon = document.querySelector(".weather-icon");

// --- FAKE WEATHER DATA GENERATOR ---
function checkWeather(city) {
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    // 1. Fake the loading time (optional, makes it feel real)
    document.querySelector(".city").innerHTML = "Searching...";
    
    setTimeout(() => {
        // 2. Generate Random Mock Data
        // Random Temp between 20 and 35
        const randomTemp = Math.floor(Math.random() * (35 - 20 + 1)) + 20; 
        // Random Humidity between 40 and 90
        const randomHumidity = Math.floor(Math.random() * (90 - 40 + 1)) + 40; 
        // Random Wind between 5 and 20
        const randomWind = Math.floor(Math.random() * (20 - 5 + 1)) + 5; 

        // 3. Update the Screen
        document.querySelector(".city").innerHTML = city; // Shows whatever name user typed
        document.querySelector(".temp").innerHTML = randomTemp + "°c";
        document.querySelector(".humidity").innerHTML = randomHumidity + "%";
        document.querySelector(".wind").innerHTML = randomWind + " km/h";

        // 4. Randomly pick an icon to make it look dynamic
        const icons = [
            "https://openweathermap.org/img/wn/04d@2x.png", // Clouds
            "https://openweathermap.org/img/wn/01d@2x.png", // Clear
            "https://openweathermap.org/img/wn/10d@2x.png", // Rain
        ];
        // Pick a random icon from the list
        weatherIcon.src = icons[Math.floor(Math.random() * icons.length)];

        // Show the weather block
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }, 500); // Wait 0.5 seconds to simulate "fetching"
}

// --- EVENT LISTENERS ---
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});