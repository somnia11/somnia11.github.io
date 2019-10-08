let API_KEY = "2d34cc4cdbf54f6e99e614e3bf839495";
let weatherData;
function Ajax() {
    let xmlHttpRequest = new XMLHttpRequest();

    let lat = document.getElementById("lat").value;
    let lon = document.getElementById("lon").value;

    if (lat == null || lat.length === 0) {
        alert("Введите широту!");
    }
    else if (lon == null || lon.length === 0) {
        alert("Введите долготу!");
    }
    else {
        xmlHttpRequest.open("GET","https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=" + API_KEY);
        xmlHttpRequest.send();
    }

    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState != 4) return;
        if (this.status != 200) {
            alert('ошибка: ' + (this.status ? this.statusText : 'запрос не удался'))
        }
        else {
            weatherData = JSON.parse(this.responseText);
            console.log(weatherData);

            document.getElementById("placeText").innerText = "Страна: " + weatherData.sys.country + ", " + weatherData.name;
            document.getElementById("weatherIcon").setAttribute("src", "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + ".png");
            document.getElementById("tempText").innerText = "" + (weatherData.main.temp - 273) > 0 ?
                "Температура: +" + Math.round(weatherData.main.temp - 273) + " C" :
                "Температура: -" + Math.round(weatherData.main.temp - 273) + " C";
            document.getElementById("windText").innerText = "Скорость ветра: " +  weatherData.wind.speed + "м/c";
        }
    };





}
