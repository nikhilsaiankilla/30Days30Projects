let inputValue = document.querySelector("#input-box");
let searchBtn = document.querySelector(".search-btn")
let icon = document.querySelector(".icon")
const apiKey = "e9bdb007cd35fbaa74ffe37a0299ace8";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
let container = document.querySelector(".container")
async function checkWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json()
    if (inputValue.value !== "") {
        console.log(data)
        if (data.cod == 200) {

            container.classList.add("show")

            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C"
            document.querySelector(".wind").innerHTML = data.wind.speed + " KM/H"
            document.querySelector(".humidity").innerHTML = data.main.humidity + " %"
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".weather-report").innerHTML = data.weather[0].main; 
            if(data.weather[0].main == "Clouds"){
                icon.src = "./images/clouds.png"
            }
            if(data.weather[0].main == "Clear"){
                icon.src = "./images/clear.png"
            }
            if(data.weather[0].main == "Dizzle"){
                icon.src = "./images/dizzle.png"
            }
            if(data.weather[0].main == "Haze"){
                icon.src = "./images/mist.png"
            }
            if(data.weather[0].main == "Rain"){
                icon.src = "./images/rain.png"
            }
            if(data.weather[0].main == "Snow"){
                icon.src = "./images/snow.png"
            }
        } else {
            document.querySelector(".invalid-msg").style.display = "block"
            setTimeout(() => {
                document.querySelector(".invalid-msg").style.display = "none"
            }, 3000)
        }
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(inputValue.value)
})