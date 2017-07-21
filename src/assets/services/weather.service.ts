import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class WeatherService {

search: any;
data: any;

  constructor(private _http: Http) {
  }

  getData(base_url) {
    return this._http.get(base_url )
      .map(res => this.data = res.json());
  }

  setSearch(res) {
    this.search = res.weather[0].main;
    console.log('bbaa');
    console.log(this.search);
  }

  getSearch() {
    return  this.search;
  }


}
