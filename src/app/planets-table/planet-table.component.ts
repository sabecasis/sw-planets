import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-planet-table',
  templateUrl: './planet-table.component.html',
  styleUrls: ['./planet-table.component.css']
})
export class PlanetTableComponent implements OnChanges, AfterViewInit {

  @Input() maxLength=10;
  @Input() planets=[];
  @Output() getNextPageEvent: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(this.planets);
  displayedColumns: string[] = ['name', 'climate', 'orbital_period', 'rotation_period', 'population'];
  pageSize=10;
  pageSizeOptions: number[] = [this.pageSize];

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.sort=this.sort;
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.planets?.currentValue){
      this.dataSource.data = changes.planets.currentValue;
      this.pageSize= changes.planets.currentValue.length;
    }
    if(changes.maxLength?.currentValue){
      this.maxLength=changes.maxLength?.currentValue;
    }
  }

  public getDataPage(event?: PageEvent) {
    //The Angular material paginator counts the pages from 0 but the Star Wars API counts from 1
    //Let's call the parent so the planet list can be updated with the next page result
    this.getNextPageEvent.emit(event.pageIndex+1);
    return event;
  }

}


