import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericValidator } from '@shared/validators/generic.validator';
import { SessionQuery } from '../../state/session.query';
import { SessionService } from '../../state/session.service';

@Component({
  selector: 'app-passwordrest',
  templateUrl: './passwordrest.component.html',
  styleUrls: ['./passwordrest.component.scss']
})
export class PasswordrestComponent implements OnInit {
  form: FormGroup;
  error: string;
  paramsObject: any;
  show: boolean = false;
  display: boolean = false;
  displayMessage: { [key: string]: string } = {};
  //$login: Observable<User> = this.query);
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  constructor(
    private fb: FormBuilder,
    private query: SessionQuery,
    private service: SessionService,
    private router: Router,
    private route: ActivatedRoute
  ) {
   
      this.form = this.fb.group({
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
      }); 
    this.validationMessages = {
      email: {
        required: 'Email is required.',
        email: 'Invalid email.',
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() :void{
    this.route.queryParamMap
  .subscribe((params) => {
    this.paramsObject = {  ...params };
    console.log(this.paramsObject);
  }
);
let orgId=this.paramsObject.params.orgId
console.log(this.paramsObject.params.id)
  }


  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }

  onSubmit() {
    const value = {
      confirmPassword: this.form.value.confirmPassword,
      newPassword: this.form.value.newPassword,
    };
   let orgId=this.paramsObject.params.orgId
   let Id = this.paramsObject.params.id
   let token = this.paramsObject.params.token
    this.service.restpassword(value,token,Id,orgId)
    this.router.navigate(['register/login'])
  }

  onReset() {
    this.form.reset();
  }


  onBlur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }
}
