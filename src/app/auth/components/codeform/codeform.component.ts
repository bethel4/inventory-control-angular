import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericValidator } from '@shared/validators/generic.validator';
import { Message, MessageService } from 'primeng/api';
import { SessionService } from '../../state/session.service';

@Component({
  selector: 'app-codeform',
  templateUrl: './codeform.component.html',
  styleUrls: ['./codeform.component.scss']
})
export class CodeformComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<any>();
  form: FormGroup;
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
    this.form = this.fb.group({
      verficationcode: ['', [Validators.required, Validators.pattern("[0-9]+")]]
    });

    this.validationMessages = {
      verficationcode: {
        required: 'Enter Code',
        pattern:'Enter Number Only'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    
    this.msgs2 = [
      {severity:'success',  detail:'Message Content'},
  ];
    
    this.form.valueChanges.subscribe(
      () =>
        (this.displayMessage = this.genericValidator.processMessages(this.form))
    );
  }

  login() {
    this.router.navigate(['/login']);
  }

 

  onSubmit() {
    debugger
    const value = {
      email: this.form.value.email,
      code: this.form.value.verficationcode
   }
    this.service.verfiy(value).subscribe();
    this.router.navigate(['register/login']);
  //  this.router.navigate(['/register/login'])
  }

  onBlur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }
}

