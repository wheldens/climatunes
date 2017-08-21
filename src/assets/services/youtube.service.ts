import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class YoutubeService {
  player: YT.Player;

  constructor(private _http: Http) {
  }

  BASE_URL: string = 'https://www.googleapis.com/youtube/v3/search'

  getYouTubeList(song) {
    const dataToSend = {
      'maxResults': '1',
      'part': 'snippet',
      'q': song,
      'type': '',
      'key': 'AIzaSyB0KpAJ7hB4WxKhEiDhHcelr-5Dr-IGaYs'
    };

    return this._http.get(this.BASE_URL, {params: dataToSend})
      .map(res => res.json())
  }

  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }


  loadVideo(url_id) {
    if (this.player) {
      this.player.loadVideoById(url_id, 0, "large")
    }
  }




}
