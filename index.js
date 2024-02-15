const apiKey = 'a610a73a6c7230bddee6f304e5a972db';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector(".city-search");
const searchButton = document.querySelector(".search-button");

async function checkWeather(city){
    const url = `${apiURL}${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    var data = await response.json();

    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-perc").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + "m/s";

    if(data.weather[0].main == "Clear"){
        document.querySelector(".weather-icon").src = 'images/clear.png';

    }
    else if(data.weather[0].main == "Snow"){
        document.querySelector(".weather-icon").src = 'images/snow.png';
    }
    else if(data.weather[0].main == "Clouds"){
        document.querySelector(".weather-icon").src = 'images/clouds.png';
    }
    else if(data.weather[0].main == "Mist"){ 
        document.querySelector(".weather-icon").src = 'images/mist.png';
    }
    else if(data.weather[0].main == "Drizzle"){
        document.querySelector(".weather-icon").src = 'images/Drizzle.png';
    }
    else if(data.weather[0].main == "Rain"){
        document.querySelector(".weather-icon").src = 'images/rain.png';
    }

    document.querySelector(".weather-info").style.display = "flex";
}

searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        searchButton.click();
    }
})

window.onload = function() {
    checkWeather("Kaunas");
}