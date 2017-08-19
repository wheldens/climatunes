import {Component, Input, OnChanges, SimpleChanges,} from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnChanges {
  @Input() url_id;
  player: YT.Player;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['url_id']) {
      if(this.player) { this.player.loadVideoById(this.url_id) }
      }
    }

  savePlayer(player) {
    console.log(player);
    this.player = player;
  }

  onStateChange(event) {
    console.log('player state', event.data);
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

}



