import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenericValidator } from '@shared/validators/generic.validator';

@Component({
  selector: 'app-saleorderform',
  templateUrl: './saleorderform.component.html',
  styleUrls: ['./saleorderform.component.scss']
})
export class SaleorderformComponent implements OnInit {
  form: FormGroup;
  displayMessage: { [key: string]: string } = {};

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
  ) {
    this.form = this.fb.group({
      id: '',
      sales_Person_ID:[''],
    sale_order_date:[''],
    delivery_date: [''],
    payment_term:[''],
    shipment_date: [''],
    due_date: [''],
    tax:[''],
    discount:[''],
    shipment_charge: [''],
    shippedamount: [''],
    leftamount:[''],
    status:[''],
    });

    this.validationMessages = {
      name: {
        required: 'Name is required.',
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.data = [
      { quantity: '457dfd', discount: '85', tax: 'three', amount: '$5454' },
      { quantity: '457dfd', discount: '85', tax: 'three', amount: '$5454' },
      { quantity: '457dfd', discount: '85', tax: 'three', amount: '$5454' },
      { quantity: '457dfd', discount: '85', tax: 'three', amount: '$5454' },

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
}


