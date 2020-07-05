import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-ingredient-modal',
  templateUrl: './add-ingredient-modal.component.html',
  styleUrls: ['./add-ingredient-modal.component.css']
})
export class AddIngredientModalComponent implements OnInit {

  public addIngredientForm : FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddIngredientModalComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {
    }) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addIngredientForm = this.formBuilder.group({        
      "title": ['', Validators.required],
      "amount": ['', Validators.required]
    });
  }

  addIngredient() {
    this.dialogRef.close(this.addIngredientForm.value);
  }
}
