import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../assets/services/weather.service';
import {Weather} from '../assets/models/weather'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: Weather = new Weather;
  url: string;

  constructor( private _weatherService: WeatherService) {
  }

  ngOnInit() {
    const positionOptions = {
      enableHighAccuracy: false,
      // timeout: 15000,
      // maximumAge: 15000
    };
    navigator.geolocation.getCurrentPosition((position) => this.geoSuccessHandler(position), this.geoErrorHandler, positionOptions);
  }

  // get geo location and set weather url
  geoSuccessHandler(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // const url = 'http://api.openweathermap.org/data/2.5/weather?lat=10&lon=60&APPID=475ae9def12f8247c9ec682413dd0bf8';
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon +
      '&APPID=475ae9def12f8247c9ec682413dd0bf8';
    this.url = url;
    this.setData(this.url);
  };

  geoErrorHandler(error) {
    console.log(error);
  };

  // get weather data and set data
  setData(weather_url) {
    this._weatherService.getData(weather_url)
      .subscribe(res => {
        this.data.title = res.name;
        this.data.icon_link = '../assets/image/icons/' + res.weather[0].icon + '.png';
        this.data.weather = res.weather[0].main;
        this.data.temp = res.main.temp;
        this.data.lat = res.coord.lat;
        this.data.lon = res.coord.lon;
      })
  }

}
