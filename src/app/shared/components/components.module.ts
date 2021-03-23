import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';
import { CityTypeaheadComponent } from "src/app/shared/components/city-typeahead/city-typeahead.component";

import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot()
  ],
  declarations: [
    LoaderComponent,
    DetailedWeatherComponent,
    CityTypeaheadComponent
  ],
  exports: [
    LoaderComponent,
    DetailedWeatherComponent,
    CityTypeaheadComponent
  ]
})
export class ComponentsModule {
}
