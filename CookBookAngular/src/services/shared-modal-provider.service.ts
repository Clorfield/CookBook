import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddIngredientModalComponent } from 'src/modals/add-ingredient-modal/add-ingredient-modal.component';

@Injectable({
  providedIn: 'root'
})
export class SharedModalProvider {
  constructor(private dialog: MatDialog) { }

  openAddIngredientModal(): MatDialogRef<AddIngredientModalComponent> {
    return this.dialog.open(AddIngredientModalComponent, {
      maxHeight: '98%',
      disableClose: true,
      data: {  },
      panelClass: 'custom-dialog-container',
      autoFocus: false
    });
  }
}
