import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfig } from '@shared/models/dialog-config.model';
import { WarehouseformComponent } from '../../ui/warehouseform/warehouseform.component';
import { WarehouseService } from '../../state/warehouse/warehouse.service';
import { DialogService } from '@shared/services/dialog.service';
import { EMPTY_PORDERSFORM } from 'src/app/purchaseorder/components/model/purchaseorder.model';

export interface DialogData {
  animal: string;
  name: string;
  width: '800px',
}
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
    HEROES = [
     {id: 1, name:'Superman',label:'warehouseone'},
     {id: 2, name:'Batman',label:'warehousetwo'},
     {id: 3, name:'Superman',label:'warehouseone'},
     {id: 4, name:'Batman',label:'warehousetwo'},
     {id: 5, name:'BatGirl',label:'warehousethree'},
     {id: 6, name:'BatGirl',label:'warehousethree'},
    
 ];
 dialogConfig: DialogConfig = {
  width: '400px',
  formComponent: WarehouseformComponent,
  dialog: this.dialog,
  service: this.service,
} as DialogConfig;
   constructor(public dialogRef: MatDialogRef<WarehouseformComponent>,
     @Inject(MAT_DIALOG_DATA) public data: DialogData,
     public dialog: MatDialog,
     private service:WarehouseService
     ) { }
 
   ngOnInit(): void {
   }
   onCreate(): void{
    this.dialogConfig.title = 'Add New WareHouse';
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
 