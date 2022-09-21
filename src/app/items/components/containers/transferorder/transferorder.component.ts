import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferorder',
  templateUrl: './transferorder.component.html',
  styleUrls: ['./transferorder.component.scss']
})
export class TransferorderComponent implements OnInit {
  data
  actions = [
    { icon: 'add', label: 'Add New Items'},
  ];

  columns = [
    { name: 'data', label: 'Data' },
    { name: 'transferorder', label: 'TransferOrder ' },
    { name: 'reason', label: 'Reason' },
    { name: 'quantitytansfer', label: 'Quantity Transfer' },
    { name: 'sourcewarehouse', label: 'Source Warehouse' },
    {name:'destinationwarehouse',label:'Destination Warehouse'}
  ];
 

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.data = [
      {data:"orange",transferorder:"457dfd",reason:"85",quantitytansfer:"three",sourcewarehouse:'$200',destinationwarehouse:'$4234'},
      {data:"phone",transferorder:"dfd34",reason:"35",quantitytansfer:"one",sourcewarehouse:'$1700',destinationwarehouse:'$4545'},
      {data:"laptop",transferorder:"345fdf",reason:"805",quantitytansfer:"two",sourcewarehouse:'$909',destinationwarehouse:'$5656'},
      {data:"clothes",transferorder:"fsdf34",reason:"94",quantitytansfer:"four",sourcewarehouse:'$5656',destinationwarehouse:'$35345'}
    ]
  }
  onCreate(){
  console.log('dsds')
  this.router.navigate(['main/items/additems']);
}
}
