import {Component, AfterContentChecked, Input} from '@angular/core';
import {MusicService} from '../../assets/services/music.service';
import {Weather} from '../../assets/models/weather';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements AfterContentChecked {
  albums;
  @Input() data: Weather;

  constructor(private _musicService: MusicService) {
  }

  ngAfterContentChecked() {
    this.getAlbums();
    console.log(this.albums);
  }

  getAlbums() {
      this._musicService.getAlbums(this.data.weather)
        .subscribe(res => this.albums = res.results.albummatches.album);
  }


}
