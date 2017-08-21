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
  page: number = 1
  @Input() data: Weather;

  constructor(private _musicService: MusicService, public _youtubeService: YoutubeService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.getSongs(this.page);
    }
  }
  getSongs(page) {
    this._musicService.getSongs(this.data.weather, page)
      .subscribe(res => {
        this.songs = res;
      })
  }
  nextPage() {
    this.page = this.page + 1;
    this.getSongs(this.page);
  }

  previousPage() {
    this.page = this.page - 1;
    this.getSongs(this.page);
  }

}
