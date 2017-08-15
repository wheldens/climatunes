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
  }

}
