import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericValidator } from '@shared/validators/generic.validator';
import { ItemService } from '../../state/items/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.scss']
})
export class AdditemsComponent implements OnInit {
  form: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  private readonly validationMessages: {
    [key: string]: { [key: string]: string };
  };
  
  constructor(
    private fb: FormBuilder,
    private service:ItemService,
    private router:Router,
    
  ) {
    this.form = this.fb.group({
      name: ['ds', Validators.required],
      suk: ['', Validators.required],
      unit: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      available: ['', Validators.required],
      productionDate: ['', Validators.required],
      expiryDate: ['', Validators.required],
     createdBy: ['', Validators.required],
    updatedBy: ['', Validators.required],
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
  onCancel(){
    this.router.navigate(['/main/items'])
  }
  onSubmit(){
    console.log(this.form.value)
    debugger
this.service.add(this.form.value)
  }
}
