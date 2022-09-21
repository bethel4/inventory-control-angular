import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
chart :any
  constructor() { }
  ngOnInit(): void {
    console.log('sdfs')
    this.chart = new Chart ('myChart',{
      type:'line',
      data:{
        labels:['a','b','c','d','e','f','g','h'],
        datasets: [{

          label: 'Sale Order Summery',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'blue',
          tension: 0.1
        }]
      }
    })
  }

}
