import {Component} from '@angular/core';
import {MusicService} from '../../assets/services/music.service';
import {WeatherService} from '../../assets/services/weather.service';
import {Http} from '@angular/http';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent {

  BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?lat=8.9936&lon=-79.5198&APPID=475ae9def12f8247c9ec682413dd0bf8';
  data: any;
  search: any;
  albums: Object[];


  constructor(private _musicService: MusicService,
              private _weatherService: WeatherService,
              _http: Http) {
  }


  showData() {
    const search = this._weatherService.getSearch();
    console.log('-=-------------');
    console.log(search);
    this._musicService.getData(search)
      .subscribe(res =>
      // console.log(res.results.albummatches.album)
        this.albums = res.results.albummatches.album
      );
  }





}
