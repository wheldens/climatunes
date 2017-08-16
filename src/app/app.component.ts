import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {WeatherService} from '../assets/services/weather.service';
import {Weather} from '../assets/models/weather'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: Weather = new Weather;

  constructor(private _http: Http, private _service: WeatherService) {
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) =>  {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon +
        '&APPID=475ae9def12f8247c9ec682413dd0bf8';
      console.log(url);
      this._service.getData(url)
        .subscribe( res => {
              console.log(res);
              this.data.title = res.name;
              this.data.icon = res.weather[0].icon;
              this.data.icon_link = '../assets/image/icons/' + this.data.icon + '.png';
              this.data.weather = res.weather[0].description;
              this.data.temp = res.main.temp;
              this.data.lat = res.coord.lat;
              this.data.lon = res.coord.lon;
            })
    });
  }
}
