//9a1de09260d34d493b86d118e71e8a82
//https://api.openweathermap.org/data/2.5/weather? units=metric
//https://api.openweathermap.org/data/2.5/weather?q=France&appid=9a1de09260d34d493b86d118e71e8a82&units=metric

//1 regarder si ma page est ok
console.log("ok")

const apiKey ="9a1de09260d34d493b86d118e71e8a82";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main =="Clear"){
        weatherIcon.src ="images/clear.png";
    }
    else if (data.weather[0].main =="Rain"){
        weatherIcon.src ="images/rain.png";
    }
    else if (data.weather[0].main =="Drizzle"){
        weatherIcon.src ="images/drizzle.png";
    }
    else if (data.weather[0].main =="Mist"){
        weatherIcon.src ="images/mist.png";
    }

    document.querySelector(".weather").style.display = "block"
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})
