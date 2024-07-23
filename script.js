
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const locationName=document.querySelector("#location-name");

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(location){
    const api_key = "d8c4532655814578b7265150242307";
    const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}&aqi=no`;

    let response=await fetch(`${url}`);
    let weather_data = await response.json();

    // console.log(weather_data);

    if(weather_data.error){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${weather_data.current.temp_c}°C`;
    description.innerHTML = `${weather_data.current.condition.text}`;

    locationName.innerText=`${weather_data.location.name}`;
    humidity.innerHTML = `${weather_data.current.humidity}%`;
    wind_speed.innerHTML = `${weather_data.current.wind_kph}Km/H`;


    switch(weather_data.current.condition.text){
        case 'Cloudy':
            weather_img.src = "/assets/cloud.png";
            break;
        case 'Partly Cloudy':
            weather_img.src = "/assets/cloud.png";
            break;
        case 'Sunny':
            weather_img.src = "/assets/clear.png";
            break;
        case 'Clear':
            weather_img.src = "/assets/clear.png";
            break;
        case 'Patchy rain nearby':
            weather_img.src = "/assets/rain.png";
            break;
        case 'Light rain shower':
            weather_img.src = "/assets/rain.png";
            break;
        case 'Light drizzle':
            weather_img.src = "/assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/assets/snow.png";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
