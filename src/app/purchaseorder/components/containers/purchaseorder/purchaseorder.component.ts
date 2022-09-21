import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseOrdersService } from '../../state/purchaseorder/purchaseorder.service';

@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.scss'],
})
export class PurchaseorderComponent implements OnInit {
  data;
  actions = [{ label: 'Create', icon: 'add' }];

  tableActions = [
    { icon: 'edit', color: '', tooltip: 'Edit' },
    { icon: 'delete', color: 'warn', tooltip: 'Delete' },
  ];
  columns = [
    { name: 'name', label: 'Name' },
    { name: 'suk', label: 'SUK ' },
    { name: 'stock_onhand', label: 'Stock On Hand ' },
    { name: 'reorder_level', label: 'Reorder Level ' },
  ];

  sideButtons = [
    {
      icon: 'pi pi-eye',
      cssClass: 'ui-button-warning icon',
      handler: this.onPurchase.bind(this),
    },
  ];
  constructor(private router: Router, private service: PurchaseOrdersService) {}

  ngOnInit(): void {
    this.data = [
      {
        name: 'orange',
        suk: '457dfd',
        stock_onhand: '85',
        reorder_level: 'three',
      },
      { name: 'phone', suk: 'dfd34', stock_onhand: '35', reorder_level: 'one' },
      {
        name: 'laptop',
        suk: '345fdf',
        stock_onhand: '805',
        reorder_level: 'two',
      },
      {
        name: 'clothes',
        suk: 'fsdf34',
        stock_onhand: '94',
        reorder_level: 'four',
      },
    ];
  }
  onPurchase() {
    console.log('dsds');
    this.router.navigate(['main/purchaseorder/purchaseorder-detail']);
  }

  onCreate() {
    console.log('dsds');
    this.router.navigate(['main/purchaseorder/addpurchase']);
  }

  onClick(event) {
    console.log(event);
    if (event.type == 'edit') {
      this.onEdit(event);
    } else if (event.type == 'delete') {
      this.onDelete(event);
    }
  }

  onEdit(event) {
    this.service.update(event.item, event.item.id);
  }

  onDelete(event) {
    this.service.delete(event.item.id);
  }
}
