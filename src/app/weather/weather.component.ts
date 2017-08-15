import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../assets/services/weather.service';
import {Weather} from '../../assets/models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  data: Weather;
  constructor(private _weatherService: WeatherService) {
  }

  ngOnInit() {
    this.data = this._weatherService.getData()
      .subscribe(
        res => {
          console.log(res);
          this.data.title = res.name;
          this.data.icon = res.weather[0].icon;
          this.data.icon_link =  '../assets/image/SVG/' +  this.data.icon + '.svg';
          this.data.weather =  res.weather[0].description;
          this.data.temp = res.main.temp;
          this.data.lat = res.coord.lat;
          this.data.lon = res.coord.lon;
        })
  }

}
