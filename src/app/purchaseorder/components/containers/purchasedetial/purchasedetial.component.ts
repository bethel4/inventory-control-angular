import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-purchasedetial',
  templateUrl: './purchasedetial.component.html',
  styleUrls: ['./purchasedetial.component.scss'],
})
export class PurchasedetialComponent implements OnInit {
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
      { quantity: '457dfd', discount: '85', tax: 'three', amount: '$5454' },
      { quantity: '457dfd', discount: '85', tax: 'three', amount: '$5454' },
      { quantity: '457dfd', discount: '85', tax: 'three', amount: '$5454' },
      { quantity: '457dfd', discount: '85', tax: 'three', amount: '$5454' },

      // {itemdetail:"amount",quantity:"fsdf34",discount:"94",tax:"four",amount:'$5454'}
    ];
  }

  onSelectionChange(item: any) {
    console.log(item);
  }
}
