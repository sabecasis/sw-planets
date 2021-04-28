import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PlanetsRequest } from '../data/planets-request-interface';
import {PlanetResponse} from '../data/planet-response-interface';

import { StarWarsPlanetsService } from './star-wars-planets.service';

describe('StarWarsPlanetsService', () => {
  let service: StarWarsPlanetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(StarWarsPlanetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getPlanets should return value from observable',
    (done: DoneFn) => {
      const request: PlanetsRequest = { page: 1 };
      service.getPlanets(request).subscribe(value => {
        expect(value).toBeDefined()
        done();
      });
    });

    it('#getPlanets should return planet response with array of planets from observable',
    (done: DoneFn) => {
      const request: PlanetsRequest = { page: 1 };
      service.getPlanets(request).subscribe(value => {
        expect(value.results).toBeDefined();
        expect(isPlanet(value.results[0])).toBeTruthy();
        done();
      });
    });
    
 
});


function isPlanet(planet:any) {
  return planet.gravity && planet.orbital_period;
}

