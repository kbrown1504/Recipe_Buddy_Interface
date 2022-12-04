import { Injectable } from "@angular/core";
import { Recipe } from "src/models/recipe";

@Injectable({
    providedIn: 'root'
})
export class recipeService {
    private recipe: Recipe;

    constructor () {}

    public setRecipe(recipe: Recipe) {
        this.recipe = recipe
    }

    public getRecipe(){
        return this.recipe;
    }
}