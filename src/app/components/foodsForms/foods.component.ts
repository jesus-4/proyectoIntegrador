import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../../services/food.service';
import { Food } from '../../model/Food';

@Component({
  selector: 'app-foods',
  imports: [CommonModule],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.scss'
})
export class FoodsComponent implements OnInit {
  foods : Food[] = [];

  constructor(private foodService: FoodService,
              private router: Router
  ) {
  }

  ngOnInit():void {
    this.loadFoods();
  }

  onEdit(food: Food) {
    this.router.navigate(['foods/edit/' + food.id]);
  }

  deleteFood(food: Food) {
    this.foodService.deleteFood(food.id!).subscribe({
      next: () => {
        this.foods = this.foods.filter(f => f.id !== food.id);
      }
    });
  }
  loadFoods() {
    this.foodService.getAllFoods().subscribe(food => this.foods = food);
  }
  onAdd() {
    this.router.navigate(['foods/add']);
  }
}
