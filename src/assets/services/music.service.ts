import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Song} from '../models/song'


@Injectable()
export class MusicService {

  constructor(private _http: Http) {
  }

  getSongs(search, page = 1) {
    return this._http.get('http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + search +
      '&format=json&api_key=2cbf2a70579e7867dc9233ea9ca83d77&page=' + page)
      .map(res => res.json())
      .map(res => res.results.trackmatches.track)
      .map((res: Array<any>) => {

        const result: Array<Song> = [];
        if (res) {
          res.forEach((item) => {
            result.push(new Song(item.artist, item.name, item.url, item.image[2], item.image[1]));
          });
        }
        return result;
      })
    }

}



