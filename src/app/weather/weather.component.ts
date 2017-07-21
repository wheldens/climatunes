import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../assets/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?lat=8.9936&lon=-79.5198&APPID=475ae9def12f8247c9ec682413dd0bf8';

  data: any;


  constructor(private _weatherService: WeatherService) {
  }

  ngOnInit() {
    this._weatherService.getData(this.BASE_URL)
      .subscribe(res =>
        this._weatherService.setSearch(res)
        // this.data = res;
      );
  }

showData(){
  console.log(this.data);
}

}
