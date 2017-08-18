import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class YoutubeService {

  constructor(private _http: Http) {}
  BASE_URL: string = 'https://www.googleapis.com/youtube/v3/search'

  getYoutTubeID(song) {
    const dataToSend = {
      'maxResults': '1',
      'part': 'snippet',
      'q': song,
      'type': '',
      'key' : 'AIzaSyB0KpAJ7hB4WxKhEiDhHcelr-5Dr-IGaYs'
    };
    return this._http.get(this.BASE_URL , {params:dataToSend})
      .map(res => res.json());
  }
}
