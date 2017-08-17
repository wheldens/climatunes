import {Component, OnChanges, SimpleChanges, Input} from '@angular/core';
import {MusicService} from '../../assets/services/music.service';
import {Weather} from '../../assets/models/weather';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnChanges {
  songs;
  page: number = 1
  @Input() data: Weather;

  constructor(private _musicService: MusicService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.getAlbums(this.data.weather, this.page);
      console.log(this.data.weather);
    }
  }

  getAlbums(search, page) {
    this._musicService.getAlbums(search, page)
      .subscribe(res => this.songs = res.results.trackmatches.track);
  }

  nextPage(){
    this.page = this.page + 1;
    console.log(this.page);
    this.getAlbums(this.data.weather, this.page);
  }

  previousPage(){
    this.page = this.page - 1;
    console.log(this.page);
    this.getAlbums(this.data.weather, this.page);
  }

  test(){
    console.log(this.songs);
  }

}

