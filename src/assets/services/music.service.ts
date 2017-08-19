import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class MusicService {

  constructor(private _http: Http) {
  }

  getSongs(search, page = 1) {
    return this._http.get('http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + search +
      '&api_key=2cbf2a70579e7867dc9233ea9ca83d77&format=json&page='+ page)
      .map(res => res.json());
  }
}
