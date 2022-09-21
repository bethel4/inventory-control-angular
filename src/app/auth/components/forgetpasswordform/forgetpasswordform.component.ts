import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericValidator } from '@shared/validators/generic.validator';
import { SessionQuery } from '../../state/session.query';
import { SessionService } from '../../state/session.service';

@Component({
  selector: 'app-forgetpasswordform',
  templateUrl: './forgetpasswordform.component.html',
  styleUrls: ['./forgetpasswordform.component.scss'],
})
export class ForgetpasswordformComponent implements OnInit {
  form: FormGroup;
  error: string;
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
    private router: Router
  ) {
      this.form = this.fb.group({
       email: ['', [Validators.required, Validators.email]],
      }); 
    this.validationMessages = {
      email: {
        required: 'Email is required.',
        email: 'Invalid email.',
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    console.log(this.query.selectAll());
  }

  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }

  onSubmit() {
    console.log(this.form.value)
    const data = {
      email: this.form.value.email,
    };
debugger
    this.service.forgetpassword(data).subscribe();
   this.show = true
  }

  onReset() {
    this.form.reset();
  }


  onBlur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }
}
