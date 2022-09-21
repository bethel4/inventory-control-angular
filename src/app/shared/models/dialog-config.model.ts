import { MatDialog } from '@angular/material/dialog';

export interface DialogConfig {
  title: string;
  formData: any;
  width: string;
  formComponent: any;
  dialog: MatDialog;
  service: any;
  lookupData: any;
}
