let weather = {
    apiKey: "fced3d012a93695b44f01eb5ed6be0dd",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, feels_like, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".feels_like").innerText = feels_like + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('nature.jpg')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Baku");

// var button = document.querySelector('.button')
// var searchbar = document.querySelector('.searchbar')
// var name = document.querySelector('.name');
// var temp = document.querySelector('.temp');
// var temp_min = document.querySelector('.temp_min');
// var temp_max = document.querySelector('.temp_max');
// var feels_like = document.querySelector('.feels_like');
// var humidity = document.querySelector('.humidity');
// var description = document.querySelector('.description');
// var presssure = document.querySelector('.presssure');
// var windspeed = document.querySelector('.windspeed');




// button.addEventListener('click', function(){
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchbar.value+'&appid=fced3d012a93695b44f01eb5ed6be0dd')
//     .then(response => response.json())
//     .then(data => {
//         var nameValue = data['name'];
//         var tempValue = data['main']['temp'];
//         var descValue = data['weather'][0]['description'];

//         name.innerHTML = nameValue;
//         temp.innerHTML = tempValue;
//         description.innerHTML = descValue;


//     })
    
    
//     .catch(error => alert("Wrong city name!"))
// })

