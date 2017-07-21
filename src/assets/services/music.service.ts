import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class MusicService {

  constructor(private _http: Http) {
  }

  getData(search) {
    console.log('zoek met' + search);
    return this._http.get('http://ws.audioscrobbler.com/2.0/?method=album.search&album=' + search + '&api_key=2cbf2a70579e7867dc9233ea9ca83d77&format=json\n')
      .map(res => res.json());
  }

}
