var api_key = '7e59c7f52a4a516ba2150ea0fa237859';
  if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(function(position)
    {
      // Get the coordinates of the current position.
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      var weather_data = getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon='+ lng + '&appid=' + api_key);
      var weather = JSON.parse(weather_data);
      document.getElementById('weather_widget').innerHTML = weather.name + ', ' + weather.sys.country + '<br />' + 'Weather: ' + weather.weather[0].description + '<br />' +  'Temperature is: ' + (weather.main.temp - 273.15).toFixed(2) + '&#8451;' + '<br />' + 'Wind speed is: ' + weather.wind.speed.toFixed(2) +' at angle of : ' + weather.wind.deg.toFixed(2) + '<br />' + 'Cloud: ' + weather.clouds.all +'<br />' + 'Humidity: ' + weather.main.humidity;
    });
  }
  else
  {
      var lat = geoplugin_latitude();
      var lng = geoplugin_longitude();
      var weather_data = getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon='+ lng + '&appid=' + api_key);
      var weather = JSON.parse(weather_data);
      document.getElementById('weather_widget').innerHTML = weather.name + ', ' + weather.sys.country + '<br />' + 'Weather: ' + weather.weather[0].description + '<br />' +  'Temperature is: ' + (weather.main.temp - 273.15).toFixed(2) + '&#8451;' + '<br />' + 'Wind speed is: ' + weather.wind.speed.toFixed(2) +' at angle of : ' + weather.wind.deg.toFixed(2) + '<br />' + 'Cloud: ' + weather.clouds.all +'<br />' + 'Humidity: ' + weather.main.humidity;
  }
