import { Component} from '@angular/core';
import {YoutubeService} from '../../assets/services/youtube.service'

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent  {

  id = '';
  private player;
  private ytEvent;

  constructor(private _youtubeService: YoutubeService){}

  getYoutTubeID(){
    this._youtubeService.getYoutTubeID()
      .subscribe(res => this.id = res.items[0].id.videoId)
  }

  onStateChange(event) {
    this.ytEvent = event.data;
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

}
