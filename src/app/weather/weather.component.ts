import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../assets/services/weather.service';
import {MusicService} from '../../assets/services/music.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?lat=51.9280556&lon=4.4181724&APPID=475ae9def12f8247c9ec682413dd0bf8';
  // BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?lat=11.9280556&lon=10.4181724&APPID=475ae9def12f8247c9ec682413dd0bf8';
  // BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?lat=-36.8621448&lon=174.5852798&APPID=475ae9def12f8247c9ec682413dd0bf8';

  data: any;
  albums: any[];

  constructor(
    private _weatherService: WeatherService,
    private _musicService: MusicService
  ) {
  }

  ngOnInit() {
    this._weatherService.getData(this.BASE_URL)
      .subscribe(res =>
        this._weatherService.setSearch(res)
        // this.data = res;
      );

    this._weatherService.getData(this.BASE_URL)
      .subscribe(res =>
        this.data = res
      );
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
