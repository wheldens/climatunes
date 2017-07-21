import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) {
  }

  getData(base_url, endpoint, key) {
    return this._http.get(base_url + endpoint + '?api_key=' + key)
      .map(res => res.json());
  }

}
