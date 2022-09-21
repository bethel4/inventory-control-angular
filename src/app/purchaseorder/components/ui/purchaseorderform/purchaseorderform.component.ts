import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenericValidator } from '@shared/validators/generic.validator';
import { PurchaseOrdersService } from '../../state/purchaseorder/purchaseorder.service';

@Component({
  selector: 'app-purchaseorderform',
  templateUrl: './purchaseorderform.component.html',
  styleUrls: ['./purchaseorderform.component.scss']
})
export class PurchaseorderformComponent implements OnInit {
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
    private service:PurchaseOrdersService
  ) {
    this.form = this.fb.group({
      purchase_order_date: [''],
  expected_delivery_date:  [''],
  payment_term: [''],
  due_date: [''],
  shipment_type: [''],
  tax: [''],
  discount: [''],
  shipment_charge:  [''],
  status: [''],
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
      {name:"orange",company_Name:"457dfd",email:"85",recivable:"three"},
      {name:"phone",company_Name:"dfd34",email:"35",recivable:"one"},
      {name:"laptop",company_Name:"345fdf",email:"805",recivable:"two"},
      {name:"clothes",company_Name:"fsdf34",email:"94",recivable:"four"}
    ]
    this.form.valueChanges.subscribe(
      () =>
        (this.displayMessage = this.genericValidator.processMessages(this.form))
    );
  }

 onBlur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }

  onSubmit() {
    debugger
    this.service.add(this.form.value)
   // this.formSubmit.emit(this.form.value);
  }
  onCancel() {
  
  }
}


