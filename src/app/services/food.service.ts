import { Injectable } from '@angular/core';
import { Food } from '../model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foods : Food[] = [
    { id: 1, name: 'Pizza', price: 10, description: 'Delicious cheese pizza' },
    { id: 2, name: 'Burger', price: 8, description: 'Juicy beef burger' },
    { id: 3, name: 'Pasta', price: 12, description: 'Creamy Alfredo pasta' }
  ];


  addFood(food: Food) {
    this.foods.push(food);
  }
  getFoods(): Food[] {
    return this.foods;
  }
  getFoodById(id: number): Food | undefined {
    return this.foods.find(food => food.id === id);
  }
  updateFood(updatedFood: Food): void {
    const index = this.foods.findIndex(food => food.id === updatedFood.id);
    if (index !== -1) {
      this.foods[index] = updatedFood;
    }
  }
  deleteFood(id: number): void {
    this.foods = this.foods.filter(food => food.id !== id);
  }
}
