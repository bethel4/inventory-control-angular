import { DialogConfig } from '../models/dialog-config.model';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

export class DialogService {
  static handleDialog(options: DialogConfig): MatDialogRef<any> {
    const dialogData = {
      title: options.title,
      formData: options.formData,
      lookupData: options.lookupData
    };

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.data = dialogData;
    dialogConfig.width = options.width;

    const dialogRef = options.dialog.open(options.formComponent, dialogConfig);
    const submitSub = (dialogRef.componentInstance as any).formSubmit.subscribe(data => {
      if (data.id) {
        options.service.update(data.id, data).subscribe((result: any) => {
          if (result.success) {
            dialogRef.close();
          }
        });
      } else {
        options.service.add(data).subscribe((result: any) => {
          if (result.success) {
            dialogRef.close();
          }
        });
      }
    });
    
    const closeSub = (dialogRef.componentInstance as any).formClose.subscribe(() => dialogRef.close());
    dialogRef.afterClosed().subscribe(() => {
      submitSub.unsubscribe();
      closeSub.unsubscribe();
    });
    return dialogRef;
  }
}
