import {Component, Input} from '@angular/core';
import {Weather} from '../../assets/models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  ForC: string;
  @Input() data: Weather;
}

