import {Component, Input, OnChanges, Output, EventEmitter, SimpleChanges,} from '@angular/core';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnChanges {
  @Input() url_id;
  player: YT.Player;
  @Output() state = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['url_id']) {
      if (this.player) {
        this.player.loadVideoById(this.url_id, 0, "large")
      }
    }
  }

  savePlayer(player) {
    console.log(player);
    this.player = player;
  }

  onStateChange(event) {
    this.state.emit(event.data);
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

}



