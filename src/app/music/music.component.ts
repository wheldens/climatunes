import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../assets/services/weather.service';
import {Weather} from '../../assets/models/weather';



@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  albums;
  data: Weather;

  constructor(private _weatherService: WeatherService) {
  }

  ngOnInit() {
    this.data = this._weatherService.getData()
      .subscribe(
        res => {
          this.data.weather =  res.weather[0].description;;
        })
  }
  getAlbums(){
  this._weatherService.getAlbums(this.data.weather)
  .subscribe(res =>  this.albums = res.results.albummatches.album);

  }

}
