import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

import * as moment from 'moment-timezone';

import { DailyWeather, Weather } from 'src/app/shared/models/weather.model';
<<<<<<< HEAD
import { Units } from 'src/app/shared/models/units.enum';
import { unitToSymbol } from 'src/app/shared/utils/units.utils';
=======
>>>>>>> app-state-02

@Component({
  selector: 'jv-daily-weather',
  templateUrl: 'daily-weather.component.html',
  styleUrls: ['daily-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyWeatherComponent {

  @Input() dailyWeather: DailyWeather;
  @Input() timeZone: string;
<<<<<<< HEAD
  @Input() unit: Units;
=======
>>>>>>> app-state-02

  get weather(): Weather {
    return this.dailyWeather.weather;
  }

  get date(): string {
    return moment.unix(this.dailyWeather.date).format('DD MMM - dddd');
  }

  get icon(): string {
    return `http://openweathermap.org/img/wn/${this.weather.icon}@2x.png`;
  }

<<<<<<< HEAD
  get unitSymbol() {
    return unitToSymbol(this.unit);
  }

=======
>>>>>>> app-state-02
  unixToHourMinute(value: number): string {
    return moment.unix(value).tz(this.timeZone).format('HH:mm');
  }
}
