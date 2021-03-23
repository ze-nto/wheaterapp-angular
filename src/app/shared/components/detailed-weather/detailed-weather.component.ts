<<<<<<< HEAD
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Weather } from '../../models/weather.model';
import { Units } from '../../models/units.enum';
import { unitToSymbol } from '../../utils/units.utils';
=======
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Weather } from 'src/app/shared/models/weather.model';
>>>>>>> app-state-02

@Component({
  selector: 'jv-detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.scss'],
<<<<<<< HEAD
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedWeatherComponent {

  @Input() weather: Weather;
  @Input() unit: Units;

  get weatherIcon(): string {
    return `http://openweathermap.org/img/wn/${ this.weather.icon }@2x.png`;
  }

  get unitSymbol(): string {
    return unitToSymbol(this.unit);
  }
=======
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailedWeatherComponent {

@Input() weather: Weather

get weatherIcon(){
  return `http://openweathermap.org/img/wn/${ this.weather.icon }@2x.png`
}
>>>>>>> app-state-02
}
