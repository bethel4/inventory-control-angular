import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { GenericValidator } from '@shared/validators/generic.validator';
import { Router } from '@angular/router';
import { GenericValidator } from '@shared/validators/generic.validator';
import { Observable } from 'rxjs';
import { SessionService } from '../../state/session.service';
import { SessionStore } from '../../state/session.store';
import { Query } from '@datorama/akita';
import { SessionQuery } from 'src/app/auth/state/session.query';
import { User } from '../../models/user.model';

@Component({
  selector: 'co-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: string;
  errormesg: boolean = false;
  passwordpage:boolean=false
  show: boolean = true;
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
   
  ) 
  {
    this.form = this.fb.group({
      email: [ [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     
    });
    this.validationMessages = {
      email: {
        required: 'Email is required.',
        email: 'Invalid email.',
      },
      password: {
        required: 'Password is required.',
        minlength: 'Password should be more than 6 characters.',
      },
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
 
    console.log(this.query.selectAll())
  }

  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }

  onSubmit() {
    const data = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
 debugger
    this.service.login(data).subscribe(
      () => {
        this.router.navigate(['/main']);
      },
      (error) => {
        this.handleError(error);
      }
    );
    //this.router.navigate(['/main'])
  }
  handleError(error) {
    if (typeof error === 'string') {
      this.error = error;
    } else {
      if (error.status === 400 || error.status === 500) {
        this.error = error.error.error;
      } else {
        this.error = error.statusText;
      }
    }
  }

  register() {
    this.router.navigate(['/signup'])
  }
  
  forgetPassword() {
   this.router.navigate(['/register/forgetpassword'])
  }

  
  onBlur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }
}
