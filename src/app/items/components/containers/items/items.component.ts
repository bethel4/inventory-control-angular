import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../state/items/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  data
  actions = [
    {label: 'Create', icon: 'add' }
  ];

  tableActions = [
    { icon: 'edit', color: '', tooltip: 'Edit'},
    { icon: 'delete', color: 'warn', tooltip: 'Delete'},
  ];
  columns = [
    { name: 'name', label: 'Name' },
    { name: 'suk', label: 'SUK ' },
    { name: 'stock_onhand', label: 'Stock On Hand ' },
    { name: 'reorder_level', label: 'Reorder Level ' },
  ];
 

  constructor(
    private router: Router,
    private service: ItemService
  ) { }

  ngOnInit(): void {
    this.data = [
      {id:1,name:"orange",suk:"457dfd",stock_onhand:"85",reorder_level:"three"},
      {name:"phone",suk:"dfd34",stock_onhand:"35",reorder_level:"one"},
      {name:"laptop",suk:"345fdf",stock_onhand:"805",reorder_level:"two"},
      {name:"clothes",suk:"fsdf34",stock_onhand:"94",reorder_level:"four"}
    ]
  }
  onCreate(){
  console.log('dsds')
  this.router.navigate(['main/items/additems']);
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

