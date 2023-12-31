import { Component, Input } from '@angular/core';
import { ChartData  } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string ='Sin titulo';
       // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [
    'label 1',
    'Label2',
    'Label3',
];
@Input('data') doughnutChartData: ChartData<'doughnut'> = {
  
  datasets: [
    { data: [350, 450, 100] }
    
  ],
};


 
}
