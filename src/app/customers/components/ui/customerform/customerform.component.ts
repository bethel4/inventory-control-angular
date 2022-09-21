import { state } from '@angular/animations';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericValidator } from '@shared/validators/generic.validator';
import { CustomerService } from '../../state/customer/customerservice';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.scss']
})
export class CustomerformComponent implements OnInit {
  form: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  private readonly validationMessages: {
    [key: string]: { [key: string]: string };
  };

  constructor(
    private fb: FormBuilder,
    private service:CustomerService,
  ) {
    this.form = this.fb.group({
      first_name: ['',[Validators.required]],
      last_name:  ['',[Validators.required]],
      email:  ['',[Validators.required, Validators.email]],
      work_phone_no:  ['',[Validators.required, Validators.pattern("[0-9]+")]],
      mobile_phone_no: ['',[Validators.required, Validators.pattern("[0-9]+")]],
      company_Name: ['',[Validators.required,Validators.pattern("[a-z]+")]],
      country: ['',[Validators.required],Validators.pattern("[0-9]+")],
      state:  ['',[Validators.required],Validators.pattern("[0-9]+")],
     
    });

    this.validationMessages = {
      first_name: {
        required: 'First Name is required.',
      },
      last_name: {
        required: 'First Name is required.',
      },
      email: {
        required: 'First Name is required.',
      },
      work_phone_no:{
        required:'work phone is required'
      },
      mobile_phone_no:{
        required:'mobile phone is required'
      },
      company_Name:{
        required:'company name',
        pattern:'number is not allowed'
      },
      country:{
        required:'country is required'
      },
      state:{
        required:'state is required'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(
      () =>
        (this.displayMessage = this.genericValidator.processMessages(this.form))
    );
  }

 onBlur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }

   onSubmit() {
    this.service.add(this.form.value)
  }
  onCancel(){

  }
}


