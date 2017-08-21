import {Component, Input, OnChanges, Output, EventEmitter, SimpleChanges,} from '@angular/core';
import {YoutubeService} from '../../assets/services/youtube.service'


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent {
  @Output() state = new EventEmitter();

  constructor(public _youtubeService: YoutubeService){}

  // Output state of video 1: playing 2: pause 3: loading
  onStateChange(event) {
    this.state.emit(event.data);
  }


}



