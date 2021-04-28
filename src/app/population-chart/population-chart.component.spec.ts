import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationChartComponent } from './population-chart.component';

describe('PopulationChartComponent', () => {
  let component: PopulationChartComponent;
  let fixture: ComponentFixture<PopulationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationChartComponent);
    component = fixture.componentInstance;
    component.planets=[JSON.parse('{      "name": "Tatooine",       "rotation_period": "23",       "orbital_period": "304",       "diameter": "10465",       "climate": "arid",       "gravity": "1 standard",       "terrain": "desert",       "surface_water": "1",       "population": "200000",       "residents": [          "http://swapi.dev/api/people/1/",           "http://swapi.dev/api/people/2/",           "http://swapi.dev/api/people/4/",           "http://swapi.dev/api/people/6/",           "http://swapi.dev/api/people/7/",           "http://swapi.dev/api/people/8/",           "http://swapi.dev/api/people/9/",           "http://swapi.dev/api/people/11/",           "http://swapi.dev/api/people/43/",           "http://swapi.dev/api/people/62/"      ],       "films": [          "http://swapi.dev/api/films/1/",           "http://swapi.dev/api/films/3/",           "http://swapi.dev/api/films/4/",           "http://swapi.dev/api/films/5/",           "http://swapi.dev/api/films/6/"      ],       "created": "2014-12-09T13:50:49.641000Z",       "edited": "2014-12-20T20:58:18.411000Z",       "url": "http://swapi.dev/api/planets/1/"  }')];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate data', () => {
    component.configureOptions();
    expect(component.data).toBeDefined();
  });

  it('should populate options', () => {
    component.configureOptions();
    expect(component.options).toBeDefined();
  });

  it('should populate labels', () => {
    component.configureOptions();
    expect(component.labels.length>0).toBeTruthy();
  });
});
