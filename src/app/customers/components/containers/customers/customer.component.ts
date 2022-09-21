import { Component, OnInit } from '@angular/core';
import { CustomerQuery } from '../../state/customer/customer.query';
import { CustomerService } from '../../state/customer/customerservice';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  data;
  actions = [{ label: 'Create', icon: 'add' }];

  tableActions = [
    { icon: 'edit', color: '', tooltip: 'Edit' },
    { icon: 'delete', color: 'warn', tooltip: 'Delete' },
  ];

  columns = [
    { name: 'name', label: 'Name' },
    { name: 'customer_Name', label: 'Company Name' },
    { name: 'email', label: 'WORK PHONE ' },
    { name: 'recivable', label: 'WORK PHONE' },
  ];
  constructor(private query: CustomerQuery, private service: CustomerService) {}

  ngOnInit(): void {
    this.data = [
      {
        name: 'orange',
        company_Name: '457dfd',
        email: '85',
        recivable: 'three',
      },
      { name: 'phone', company_Name: 'dfd34', email: '35', recivable: 'one' },
      {
        name: 'laptop',
        company_Name: '345fdf',
        email: '805',
        recivable: 'two',
      },
      {
        name: 'clothes',
        company_Name: 'fsdf34',
        email: '94',
        recivable: 'four',
      },
    ];
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
