import { Component, OnInit, Input, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'ngx-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements AfterViewInit, OnChanges {
  @Input() graficoOpciones: any;
  @Input() type;
  @Input() data = {};
  @Input() options;
  public chart: Chart;
  canvas: any;
  ctx: any;
  @ViewChild('chartCanvas') chartCanvas;


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes.data.isFirstChange() && changes.data.currentValue){
      this.data=changes.data.currentValue;
      this.updateChart();
    }
  }

  ngAfterViewInit() {
   this.createChart();
  }

  private updateChart(){
    this.chart.data=this.data;
    this.chart.update();
  }
  public createChart(){
    if(this.chart!=null){
      this.chart.destroy();
    }
    this.canvas = this.chartCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.chart = new Chart(this.ctx, {
      type: this.type,
      data: this.data,
      options: this.options,
    });
  }
}
