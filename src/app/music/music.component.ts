import {Component, OnChanges, SimpleChanges, Input} from '@angular/core';
import {MusicService} from '../../assets/services/music.service';
import {YoutubeService} from '../../assets/services/youtube.service'
import {Weather} from '../../assets/models/weather';
import {Song} from '../../assets/models/song'

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnChanges {
  songs: Song[];
  startPage: number = 1
  @Input() data: Weather;

  constructor(private _musicService: MusicService, public _youtubeService: YoutubeService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this._musicService.getSongs(this.data.weather, this.startPage)
        .subscribe(res => {
          this.songs = res;
        })
    }
  }

  getSongs(pageNumber) {
    this._musicService.getSongs(this.data.weather, pageNumber)
      .subscribe(res => {
        this.songs = res;
      })
  }
}
