import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  addRecipeForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addRecipeForm = new FormGroup({        
      "title": new FormControl(''),
      "shortDescription": new FormControl(''),
      "description": new FormControl('')
    });
  }

  addRecipe() {
    
  }
}
