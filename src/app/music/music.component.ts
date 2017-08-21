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
  url_id;
  state: string;
  playing: Song;
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



  sendSong(song, item) {
    if(this.playing) {
      this.playing.play = false;
    }
    item.play = 'true';
    this.playing = item
    this._youtubeService.getYouTubeList(song)
      .subscribe(   res => {
        console.log(res);
      this.url_id = res.items[0].id.videoId
      })
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
