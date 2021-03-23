import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTypeaheadComponent } from './city-typeahead.component';

describe('CityTypeaheadComponent', () => {
  let component: CityTypeaheadComponent;
  let fixture: ComponentFixture<CityTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityTypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
