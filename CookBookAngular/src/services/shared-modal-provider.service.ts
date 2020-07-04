import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class SharedModalProvider {
  constructor(private dialog: MatDialog) { }

  addAccountModal(patientAccounts: any, patientName: string, saveOnOk: boolean, patientKey?: number, caseKey?: number): MatDialogRef<null> {
    return this.dialog.open(null, {
      maxHeight: '98%',
      disableClose: true,
      data: { patientAccounts, patientName, saveOnOk, patientKey, caseKey },
      autoFocus: false
    });
  }
}
