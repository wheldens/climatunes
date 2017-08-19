import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Weather} from '../models/weather';

@Injectable()
export class WeatherService {
  data: Weather;
  constructor(private _http: Http) {}

  getData(weather_url: string) {
    return this._http.get(weather_url)
      .map(res => this.data = res.json());
  }
}
