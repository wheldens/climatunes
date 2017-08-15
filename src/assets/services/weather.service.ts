import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Weather} from '../models/weather';

@Injectable()
export class WeatherService {
  data: Weather = new Weather;
  // url: string = 'http://api.openweathermap.org/data/2.5/weather?lat=51.9280556&lon=4.4181724&APPID=475ae9def12f8247c9ec682413dd0bf8';

  constructor(private _http: Http) {}

  getData() {
    return this.data;
    // return this._http.get( this.url  )
    //   .map(res => this.data = res.json());
  }

  getAlbums() {
  }




}
