let weather ={
    "apiKey": "fced3d012a93695b44f01eb5ed6be0dd",
    fetchWeather: function (city) {
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
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

      displayWeather: function(data){
        const {name}= data;
        const {icon, description}= data.weather[0];
        const {temp, feels_like, temp_min, temp_max, humidty, pressure}=data.main;
        const {speed}= data.wind;
        console.log(name, icon, description, temp, feels_like, temp_min, temp_max, humidty, pressure, speed );
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src =
          "https://openweathermap.org/img/wn/" + icon + "<a href="//www.flaticon.com/free-icons/cloud-computing" title="cloud computing icons">Cloud computing icons created by Freepik - Flaticon</a>";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".temp_min").innerText = temp_min + "°C";
        document.querySelector(".temp_max").innerText = temp_max + "°C";
        document.querySelector(".feels_like").innerText = feels_like + "°C";
        document.querySelector(".humidity").innerText =  "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('nature.jpg" + name + "')";

      }
    };