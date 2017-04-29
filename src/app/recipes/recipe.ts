import { Ingredient } from '../shared/ingredient';

export class Recipe {
    name: string;
    description: string;
    imagePath: string;
    ingrediants: Ingredient[]
  
    constructor(name: string, description: string, imagePath: string, ingrediants: Ingredient[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingrediants = ingrediants;
    }
}
