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
        const {icon, description}= data.weather;
        const {temp, feels_like, temp_min, temp_max, humidty, pressure}=data.main;
        const {speed}= data.wind;
        console.log(name, icon, description, temp, feels_like, temp_min, temp_max, humidty, pressure, speed )
      }
    };