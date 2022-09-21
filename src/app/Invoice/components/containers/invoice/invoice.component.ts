import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceQuery } from '../../state/invoice/invoice.query';
import { InvoiceService } from '../../state/invoice/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  data
  actions = [
    { icon: 'add',},
  ];

  columns = [
    { name: 'name', label: 'Name' },
    { name: 'suk', label: 'SUK ' },
    { name: 'stock_onhand', label: 'Stock On Hand ' },
    { name: 'reorder_level', label: 'Reorder Level ' },
  ];
 
  tableActions = [
    { icon: 'edit', color: '', tooltip: 'Edit' },
    { icon: 'delete', color: 'warn', tooltip: 'Delete' },
  ];
  constructor(
    private router: Router,
    private service:InvoiceService,
    private query:InvoiceQuery
  ) { }

  ngOnInit(): void {
    this.data = [
      {name:"orange",suk:"457dfd",stock_onhand:"85",reorder_level:"three"},
      {name:"phone",suk:"dfd34",stock_onhand:"35",reorder_level:"one"},
      {name:"laptop",suk:"345fdf",stock_onhand:"805",reorder_level:"two"},
      {name:"clothes",suk:"fsdf34",stock_onhand:"94",reorder_level:"four"}
    ]
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

