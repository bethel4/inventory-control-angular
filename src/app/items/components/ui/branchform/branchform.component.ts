import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { GenericValidator } from '@shared/validators/generic.validator';
import { WarehouseService } from '../../state/warehouse/warehouse.service';
import { OrganzationprofileComponent } from '../organzationprofile/organzationprofile.component';
import { DialogData } from '../warehouseform/warehouseform.component';

@Component({
  selector: 'app-branchform',
  templateUrl: './branchform.component.html',
  styleUrls: ['./branchform.component.scss']
})
export class BranchformComponent implements OnInit {
  displayMessage: { [key: string]: string } = {};
  form: FormGroup;
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  display: boolean = false;
  show: boolean = true;
  constructor(
    private service: WarehouseService,
    private fb: FormBuilder,public dialogRef: MatDialogRef<OrganzationprofileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog) 
    {
      this.form = this.fb.group({
        id:1,
        branch_name:[''],
        active:[],
        email:[''],
        phone_no: [''],
        country:[''],
        state:[''],
        city:[''],
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
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onBlur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }

  onSubmit(){
    this.service.add(this.form.value)
  }
}
