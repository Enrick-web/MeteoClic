const api = "86b7eddbb3c979a0c72b9f49308e93c7";
// Appel de l'api avec la ville en param
let apiCall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=fr`;

  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.querySelector("#city").innerHTML =
          '<i class="fas fa-globe-europe"></i>' +
          data.name +
          " " +
          data.sys.country;
        document.querySelector("#temp").innerHTML =
          '<i class="fas fa-temperature-low"></i>' + data.main.temp + "°C";
        document.querySelector("#humidity").innerHTML =
          '<i class="fas fa-tint"></i>' + data.main.humidity + "%";
        document.querySelector("#wind").innerHTML =
          '<i class="fas fa-wind"></i>' + data.wind.speed + "km/h";
        document.querySelector("#max").innerHTML = data.main.temp_max + "°";
        document.querySelector("#min").innerHTML = data.main.temp_min + "°";
        document.querySelector("#infos").innerHTML =
          data.weather[0].description + " sur " + data.name;

        document.querySelector("#speed").innerHTML = data.wind.deg + " degré";
        document.querySelector(".lat").innerHTML =
          "Latitude : " + data.coord.lat;
        document.querySelector(".lon").innerHTML =
          "Longitude : " + data.coord.lon;
      })
    )
    .catch((err) => console.log("Erreur " + err));
};

// Ecouteur evènement soumission formulaire
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let ville = document.querySelector("#inputCity").value;

  apiCall(ville);
});
apiCall("Paris");

// Heure
function getTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  hours = ((hours < 10) ? " 0" : " ") + hours;
  minutes = ((minutes < 10) ? ":0" : ":") + minutes;
  seconds = ((seconds < 10) ? ":0" : ":") + seconds;
  var myHour = document.getElementById("my-hour");
  myHour.textContent = hours + minutes + seconds;
  setTimeout("getTime()", 1000);

}
getTime();