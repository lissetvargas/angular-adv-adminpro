import { Component } from '@angular/core';
//import { Color } from 'chart.js';
import { ChartData  } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  

 public labels1: string[] = ['pan','refersco','tacos'];
 public data1: ChartData<'doughnut'> = {
    
    datasets: [
      { data: [10, 15, 40] }
      ],
  }; 

  
 public labels2: string[] = ['papas','refersco','tacos'];
 public data2: ChartData<'doughnut'> = {
    
    datasets: [
      { data: [100, 150, 540] }
      ],
  }; 

// public colors: Color[] = [
//   { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
// ];


}
