import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class MusicService {

  constructor(private _http: Http) {
  }

  getData(base_url) {
    return this._http.get(base_url)
      .map(res => res.json());
  }

}
