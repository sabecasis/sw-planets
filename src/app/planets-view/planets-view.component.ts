import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { PlanetResponse } from '../data/planet-response-interface';
import { PlanetsRequest } from '../data/planets-request-interface';
import { StarWarsPlanetsService } from '../services/star-wars-planets.service';

@Component({
  selector: 'app-planets-view',
  templateUrl: './planets-view.component.html',
  styleUrls: ['./planets-view.component.css']
})
export class PlanetsViewComponent implements OnInit {

  private currentPlanetsResponse: PlanetResponse;
  constructor(private starWarsPlanetsService : StarWarsPlanetsService) { }
 


  ngOnInit(): void {
    this.setPlanets(1);
  }

  updatePlanets(pageNum){
    if(pageNum){
      this.setPlanets(pageNum);
    }
  }

  getCurrentPlanets(){
    return this.currentPlanetsResponse?.results;
  }

  getMaxLenght(){
    return this.currentPlanetsResponse?.count;
  }
  public setPlanets(pageNum:number){
    const request : PlanetsRequest={
      page:pageNum
    };
    this.starWarsPlanetsService
    .getPlanets(request)
    .pipe(
      take(1)
    )
    .subscribe(
      (data)=>{
        this.currentPlanetsResponse=data;
      }, 
      (error)=>{
        alert(error);
      }
    );
  }

}
