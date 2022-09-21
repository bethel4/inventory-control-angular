import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfig } from '@shared/models/dialog-config.model';
import { DialogService } from '@shared/services/dialog.service';
import { EMPTY_PORDERSFORM } from 'src/app/purchaseorder/components/model/purchaseorder.model';
import { BranchQuery } from '../../state/branch/branch.query';
import { BranchService } from '../../state/branch/branch.service';
import { BranchformComponent } from '../../ui/branchform/branchform.component';
import { DialogData } from '../warehouse/warehouse.component';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {
  item
  actions = [{ label: 'Create', icon: 'add' }];

  tableActions = [
    { icon: 'edit', color: '', tooltip: 'Edit' },
    { icon: 'delete', color: 'warn', tooltip: 'Delete' },
  ];

  columns = [
    { name: 'name', label: 'Name' },
    { name: 'customer_Name', label: 'Company Name' },
    { name: 'email', label: 'WORK PHONE ' },
    { name: 'recivable', label: 'WORK PHONE' },
  ];
  dialogConfig: DialogConfig = {
    width: '400px',
    formComponent: BranchformComponent,
    dialog: this.dialog,
    service: this.service,
  } as DialogConfig;
  constructor(private query: BranchQuery, private service: BranchService,
               public dialogRef: MatDialogRef<BranchformComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
               public dialog: MatDialog,) {}

  ngOnInit(): void {
    this.item = [
      {
        name: 'orange',
        company_Name: '457dfd',
        email: '85',
        recivable: 'three',
      },
      { name: 'phone', company_Name: 'dfd34', email: '35', recivable: 'one' },
      {
        name: 'laptop',
        company_Name: '345fdf',
        email: '805',
        recivable: 'two',
      },
      {
        name: 'clothes',
        company_Name: 'fsdf34',
        email: '94',
        recivable: 'four',
      },
    ];
  }

  onClick(event) {
    console.log(event);
    if (event.type == 'edit') {
      this.onEdit(event);
    } else if (event.type == 'delete') {
      this.onDelete(event);
    }else if(event.type=='create'){
      this.onCreate()
    }
  }

  onCreate(): void{
    this.dialogConfig.title = 'Add New Branch';
    this.dialogConfig.formData = {...EMPTY_PORDERSFORM};
    DialogService.handleDialog(this.dialogConfig);
  }
  onEdit(data): void{
    this.dialogConfig.title = 'Edit Purchase Orders';
    this.dialogConfig.formData = {...data};
    DialogService.handleDialog(this.dialogConfig);
  }
  onDelete(data): void{
    console.log(data.id)
    const selectedId = data.id;
    this.service.delete(selectedId).subscribe();
  }
 } 


