import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../assets/services/weather.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  albums: Object[];

  constructor(private _weatherService: WeatherService) {
  }

  ngOnInit() {

    this._weatherService.getAlbums()
  }


}
