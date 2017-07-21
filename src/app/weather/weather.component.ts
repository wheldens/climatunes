import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../assets/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  BASE_URL = 'https://api.themoviedb.org/3';
  API_KEY = '149a733ca73a71f9233c239e0607f92d';
  ENDPOINT = '/discover/movie';

  data: Object;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
      this._weatherService.getData( this.BASE_URL, this.ENDPOINT, this.API_KEY)
        .subscribe(res => this.data = res.results)
  }

}
