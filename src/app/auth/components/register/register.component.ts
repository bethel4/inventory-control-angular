import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericValidator } from '@shared/validators/generic.validator';
import { SessionService } from '../../state/session.service';
import { ConfirmationService, Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ConfirmationService,MessageService],
})
export class RegisterComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<any>();
  form: FormGroup;
  code: FormGroup;
  data: { email; password; confirmpassword };
  error: string;
  errormesg: boolean = false;
  displayMessage: { [key: string]: string } = {};
  msgs2: Message[];
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  display: boolean = false;
  show: boolean = true;
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private service: SessionService,
    private router: Router 
  ) {
    this.code = this.fb.group({
      verficationcode: ['', [Validators.required,Validators.pattern("[0-9]+")]]
    });
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.validationMessages = {
      confirmPassword: {
        required: 'confim password is required',
        minlength: 'Password should be more than 6 characters.',
      },
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
    this.code.valueChanges.subscribe(
      ()=>
      (this.displayMessage = this.genericValidator.processMessages(this.code))
    )
    this.form.valueChanges.subscribe(
      () =>
        (this.displayMessage = this.genericValidator.processMessages(this.form))
    );
  }

  login() {
    this.router.navigate(['register/login']);
  }

  handleError(error): void{
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

  
  onSubmit() {
    if (this.form.value.password != this.form.value.confirmPassword) {
      this.errormesg = true;
      console.log('equal');
    } else {
      this.service.register(this.form.value).subscribe()
      this.router.navigate(['register/code'])
    }
  }
  onBlur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }
        


}
