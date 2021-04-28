import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlanetResponse } from '../data/planet-response-interface';
import { PlanetsRequest } from '../data/planets-request-interface';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class StarWarsPlanetsService {

  private PLANETS_URL :string = `${environment.starWarsBaseUrl}planets/`
  
  constructor(
    private generalService: GeneralService,  
    private httpClient: HttpClient) { }

  public getPlanets(request: PlanetsRequest):Observable<PlanetResponse>{
    let url = `${this.PLANETS_URL}${(request.page>0)?`?page=${request.page}`:''}`;
    return this.httpClient.get<PlanetResponse>(url, this.generalService.getNoTokenHeader());
  }
}
