import {Component, OnChanges, SimpleChanges, Input} from '@angular/core';
import {MusicService} from '../../assets/services/music.service';
import {Weather} from '../../assets/models/weather';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnChanges {
  albums;
  @Input() data: Weather;

  constructor(private _musicService: MusicService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.getAlbums(this.data.weather);
      console.log(this.data.weather);
    }
  }

  getAlbums(search) {
    this._musicService.getAlbums(search)
      .subscribe(res => this.albums = res.results.albummatches.album);
  }

}
