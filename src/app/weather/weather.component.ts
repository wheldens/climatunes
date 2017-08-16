import {Component, Input} from '@angular/core';
import {TempPipe} from '../../assets/pipes/temp.pipe'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  @Input() data;
}
