import {Component, OnChanges, SimpleChanges, Input} from '@angular/core';
import {MusicService} from '../../assets/services/music.service';
import {YoutubeService} from '../../assets/services/youtube.service'
import {Weather} from '../../assets/models/weather';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnChanges {
  songs;
  page: number = 1
  url_yt;
  openSearch:object
  @Input() data: Weather;

  constructor(private _musicService: MusicService, private _youtubeServie: YoutubeService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.getSongs(this.page);
    }
  }

  getSongs(page) {
    this._musicService.getSongs(this.data.weather, page)
      .subscribe(res => {
        this.songs = res.results.trackmatches.track;
        console.log(res.results)
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


  sendSong(song) {
    this._youtubeServie.getYouTubeList(song)
      .subscribe(res => this.url_yt = 'http://www.youtube.com/embed/' + res.items[0].id.videoId)
  }


}

