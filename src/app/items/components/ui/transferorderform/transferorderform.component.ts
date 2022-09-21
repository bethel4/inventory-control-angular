import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericValidator } from '@shared/validators/generic.validator';

@Component({
  selector: 'app-transferorderform',
  templateUrl: './transferorderform.component.html',
  styleUrls: ['./transferorderform.component.scss']
})
export class TransferorderformComponent implements OnInit {
  form: FormGroup;
  displayMessage: { [key: string]: string } = {};
  data
  private genericValidator: GenericValidator;
  private readonly validationMessages: {
    [key: string]: { [key: string]: string };
  };

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
     
      name: ['', Validators.required],
    });

    this.validationMessages = {
      name: {
        required: 'Name is required.',
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }
  columns = [
  //  { name: 'itemdetail', label: 'Item Detail' },
    { name: 'quantity', label: 'Quantity ' },
    { name: 'discount', label: 'Discount ' },
    { name: 'tax', label: 'TAX' },
    {name:'amount',label:'Amount'}
  ];
 
 
  ngOnInit(): void {
    this.data = [
      {quantity:"457dfd",discount:"85",tax:"three",amount:'$5454'},
      {quantity:"457dfd",discount:"85",tax:"three",amount:'$5454'},
      {quantity:"457dfd",discount:"85",tax:"three",amount:'$5454'},
      {quantity:"457dfd",discount:"85",tax:"three",amount:'$5454'},
      
      // {itemdetail:"amount",quantity:"fsdf34",discount:"94",tax:"four",amount:'$5454'}
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
    //this.formSubmit.emit(this.form.value);
  }


}
