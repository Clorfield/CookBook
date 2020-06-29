import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/models/recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    {title: "Pidada Mudada", shortDescription: "Put your food in my hands", description: "", ingredients: []},
    {title: "Didada Mudada", shortDescription: "Put your food in my hands", description: "", ingredients: []},
    {title: "Cidada Mudada", shortDescription: "Put your food in my hands", description: "", ingredients: []}
  ];

  constructor() { }

  ngOnInit() {
  }

}
