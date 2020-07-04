import { Ingredient } from './../../models/recipe-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.css']
})
export class IngredientItemComponent implements OnInit {

  @Input() ingredient: Ingredient;
  @Input() type: 'edit' | 'display';
  @Output() deleteIngredientEvent = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  deleteIngredient() {
    this.deleteIngredientEvent.next(this.ingredient);
  }
}
