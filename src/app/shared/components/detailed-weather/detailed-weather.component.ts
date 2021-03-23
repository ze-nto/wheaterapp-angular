import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Weather } from 'src/app/shared/models/weather.model';

@Component({
  selector: 'jv-detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailedWeatherComponent {

@Input() weather: Weather

get weatherIcon(){
  return `http://openweathermap.org/img/wn/${ this.weather.icon }@2x.png`
}
}
