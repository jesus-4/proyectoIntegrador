import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl,FormGroup, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FoodService } from '../../services/food.service';
import { Food } from '../../model/food';

@Component({
  selector: 'app-foods',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.scss'
})
export class FoodsComponent {
  private FoodService = inject(FoodService);
  private formBuilder= inject(FormBuilder);
  foodForm : FormGroup;
  foods : Food[] = [];

  constructor(){
    this.foodForm = this.formBuilder.group({
      id: 0,
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['']
    });
    this.loadFoods();
  }


  loadFoods() {
     this.foods = this.FoodService.getFoods();
  }

  onSubmit() {
    if (this.foodForm.valid) {
      const food: Food = this.foodForm.value;
      if (food.id === 0) {
        const newFood  = {...food, id: this.generateId()};
        this.FoodService.addFood(newFood);
      } else {
        this.FoodService.updateFood(food);
      }
      this.loadFoods();
    }
  }

  editFood(food: Food) {
    this.foodForm.patchValue({
      ...food});
  }

  deleteFood(id: number) {
    this.FoodService.deleteFood(id);
    this.loadFoods();
  }

  generateId(): number {
    return this.foods.length > 0 ? Math.max(...this.foods.map(food => food.id)) + 1 : 1;
  }
  // resetForm() {
  //   this.foodForm.reset(
  //     { name: '', price: '', description: '' }
  //   );
  // }
}
