import { Component, OnInit } from '@angular/core';
import { Food } from '../../model/Food';
import { FoodService } from '../../services/food.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public foods: Food[] = []

  constructor(private foodService: FoodService) {}
  ngOnInit(): void {
    this.loadFoods();
  }

  loadFoods(): void {
    this.foodService.getAllFoods().subscribe(food => this.foods = food);
  }
  onAdd(food:Food) : void {

  }
}
