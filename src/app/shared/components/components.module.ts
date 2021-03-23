import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { LoaderComponent } from './loader/loader.component';
import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';
<<<<<<< HEAD
import { CitiesTypeaheadComponent } from './cities-typeahead/cities-typeahead.component';
=======
import { CityTypeaheadComponent } from "src/app/shared/components/city-typeahead/city-typeahead.component";

import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { FormsModule } from "@angular/forms";
>>>>>>> app-state-02

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
<<<<<<< HEAD
    TypeaheadModule.forRoot(),
=======
    TypeaheadModule.forRoot()
>>>>>>> app-state-02
  ],
  declarations: [
    LoaderComponent,
    DetailedWeatherComponent,
<<<<<<< HEAD
    CitiesTypeaheadComponent,
=======
    CityTypeaheadComponent
>>>>>>> app-state-02
  ],
  exports: [
    LoaderComponent,
    DetailedWeatherComponent,
<<<<<<< HEAD
    CitiesTypeaheadComponent,
=======
    CityTypeaheadComponent
>>>>>>> app-state-02
  ]
})
export class ComponentsModule {
}
