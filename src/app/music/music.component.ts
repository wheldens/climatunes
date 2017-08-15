import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../assets/services/weather.service';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  albums;

  constructor(private _weatherService: WeatherService) {
  }

  ngOnInit() {

  }

  getAlbums(){
  this._weatherService.getAlbums()
  .subscribe(res =>  this.albums = res.results.albummatches.album);

  }

}
