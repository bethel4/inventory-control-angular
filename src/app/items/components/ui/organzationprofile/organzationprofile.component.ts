import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericValidator } from '@shared/validators/generic.validator';
import { SessionService } from '../../../../auth/state/session.service';
import { Organzation } from '../../state/orgnaztion/orgnazation.service';

@Component({
  selector: 'app-organzationprofile',
  templateUrl: './organzationprofile.component.html',
  styleUrls: ['./organzationprofile.component.scss']
})
export class OrganzationprofileComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<any>();
  form: FormGroup;
  error: string;
  errormesg: boolean = false;
  displayMessage: { [key: string]: string } = {};

  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  display: boolean = false;
  show: boolean = true;
  constructor(
    private fb: FormBuilder,
    private serviceorg:Organzation,
    private service: SessionService,
    private router: Router
  ) // private loaderService: LoaderService
  {
    this.form = this.fb.group({
      organization_Name: ['',],
      buesiness_location: [''],
      country: [''],
      state: [''],
     city: [''],
      contact_first_name:[''],
      zip_code: [''],
      contact_email:[''],
      contact_phone_no:[''],
    
    });

    this.validationMessages = {
      code: {
        required: 'code is required',
      },
      email: {
        required: 'Email is required.',
        email: 'Invalid email.',
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

  login() {
    this.router.navigate(['/login']);
  }
  
  onSubmit() {
    this.serviceorg.update(this.form.value).subscribe()
  }
  onDelete(){
   // this.serviceorg.delate()
  }
  onBlur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }
}
