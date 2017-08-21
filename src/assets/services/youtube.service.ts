import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Song} from '../models/song'

@Injectable()
export class YoutubeService  {
  player: YT.Player;
  url_id :string = '';
  state: string;
  playing: Song;

  constructor(private _http: Http) {
  }


  getID(){
    return this.url_id;
  }

  savePlayer(player) {
    this.player = player;
  }


// search video based on song ( artist & track)
  setSong(song, item) {

    // set playing property
    if(this.playing) {
      this.playing.play = false;
    }
    item.play = 'true';
    this.playing = item

    // set video id
    this.getYouTubeList(song)
      .subscribe(   res => {
        this.url_id = res.items[0].id.videoId

        // load video
        this.loadVideo()
      })
  }

// search songs http call
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


  loadVideo() {
    if (this.player) {
      this.player.loadVideoById(this.url_id, 0, "large")
    }
  }


  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }


  getState(){
    return this.state;
  }

  stateLog(state) {
    switch (state) {
      case 1:
        this.state = 'Playing';
        break;
      case 2:
        this.state = 'Pause';
        break;
      case 3:
        this.state = 'Loading';
        break;
    }
  }




}
