import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenericValidator } from '@shared/validators/generic.validator';
import { Observable } from 'rxjs/internal/Observable';
import { InvoiceQuery } from '../../state/invoice/invoice.query';
import { InvoiceService } from '../../state/invoice/invoice.service';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-invoiceform',
  templateUrl: './invoiceform.component.html',
  styleUrls: ['./invoiceform.component.scss']
})
export class InvoiceformComponent implements OnInit {
  form: FormGroup;
  for: FormGroup;
  displayMessage: { [key: string]: string } = {};
  statuses
  invoice$: Observable<any[]> = this.inviceQuery.selectAll();
  private genericValidator: GenericValidator;
  private readonly validationMessages: {
    [key: string]: { [key: string]: string };
  };
  data
  actions = [
    { icon: 'Add', },
  ];
 
  columns = [
    //  { name: 'itemdetail', label: 'Item Detail' },
    { name: 'quantity', header: 'Quantity ' },
    { name: 'discount', header: 'Discount ' },
    { name: 'tax', header: 'TAX' },
    { name: 'amount', header: 'Amount' },
  ];
  constructor(
    private fb: FormBuilder,
    private inviceQuery:InvoiceQuery,
    private service:InvoiceService
  ) {
    this.form = this.fb.group({
      id: '',
      name: ['', Validators.required],
    });

    this.validationMessages = {
      name: {
        required: 'Name is required.',
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.service.get()
    this.statuses = [{label: 'In Stock', value: 'INSTOCK'},{label: 'Low Stock', value: 'LOWSTOCK'},
    {label: 'Out of Stock', value: 'OUTOFSTOCK'}]
    this.data = [
      { code: '457dfd', name: '85', inventoryStatus: 'three', price: '$5454' },
      { code: '457dfd', name: '85', inventoryStatus: 'three', price: '$5454' },
      { code: '457dfd', name: '85', inventoryStatus: 'three', price: '$5454' },
      { code: '457dfd', name: '85', inventoryStatus: 'three', price: '$5454' },

      // {itemdetail:"amount",quantity:"fsdf34",discount:"94",tax:"four",amount:'$5454'}
    ];
    this.form.valueChanges.subscribe(
      () =>
        (this.displayMessage = this.genericValidator.processMessages(this.form))
    );
  }

 onBlur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }

  onSubmit() {
   // this.formSubmit.emit(this.form.value);
  }
  onCancel() {
   
  }

  item(event) {
    console.log(event)
    debugger
  console.log(this.service)
  
}

}

