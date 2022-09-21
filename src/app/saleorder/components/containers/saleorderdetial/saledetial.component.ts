import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-saledetial',
  templateUrl: './saledetial.component.html',
  styleUrls: ['./saledetial.component.scss']
})
export class SaledetialComponent implements OnInit {
  items: MenuItem[];

  data;
  product;
  columns = [
    //  { name: 'itemdetail', label: 'Item Detail' },
    { name: 'quantity', header: 'Quantity ' },
    { name: 'discount', header: 'Discount ' },
    { name: 'tax', header: 'TAX' },
    { name: 'amount', header: 'Amount' },
  ];

  ngOnInit() {
    this.data = [
      { quantity: '457dfd', discount: '85', tax: 'three', amount: '$5454', },
      { quantity: '457dfd', discount: '85', tax: 'three', amount: '$5454' },
      { quantity: '457dfd', discount: '85', tax: 'three', amount: '$5454' },
      { quantity: '457dfd', discount: '85', tax: 'three', amount: '$5454' },

      // {itemdetail:"amount",quantity:"fsdf34",discount:"94",tax:"four",amount:'$5454'}
    ];
    
    this.items = [
      {
          label:'File',
          icon:'pi pi-fw pi-file',
          
      },
      {
          label:'Edit',
          icon:'pi pi-fw pi-pencil',
         
      },
      {
          label:'Users',
          icon:'pi pi-fw pi-user',
         
      },
  ];

  }

  onSelectionChange(item: any) {
    console.log(item);
  }


}