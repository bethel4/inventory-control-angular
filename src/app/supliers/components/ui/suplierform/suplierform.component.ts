import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericValidator } from '@shared/validators/generic.validator';
import { SuplierService } from 'src/app/supliers/state/suplier.service';

@Component({
  selector: 'app-suplierform',
  templateUrl: './suplierform.component.html',
  styleUrls: ['./suplierform.component.scss']
})
export class SuplierformComponent implements OnInit {
  form: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  private readonly validationMessages: {
    [key: string]: { [key: string]: string };
  };

  constructor(
    private fb: FormBuilder,
    private service:SuplierService,
    @Inject(MAT_DIALOG_DATA) public config: any
  ) {
    this.form = this.fb.group({
      firstName: [''],
      lastName:  [''],
      email:  [''],
      workPhone_no:  [''],
      mobile_no: [''],
      company_Name: [''],
      country: [''],
      state:  [''],
      producation_date:[''],
      created_by:['']
    });

    this.validationMessages = {
      name: {
        required: 'Name is required.',
      },
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


