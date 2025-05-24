import { Injectable, inject } from '@angular/core';
import { Food } from '../model/Food';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private http= inject(HttpClient);
  private foods : Food[] = [
    ];

  constructor() {
  }
  getAllFoods(): Observable<Food[]> {
    return this.http.get<Food[]>('http://localhost:3000/foods');
  }
  getFoodById(id: string): Observable<Food> {
    return this.http.get<Food>(`http://localhost:3000/foods/${id}`);
  }
  createFood(food: Food): Observable<Food> {
    return this.http.post<Food>('http://localhost:3000/foods', food);
  }
  updateFood(food: Food): Observable<Food> {
    return this.http.put<Food>(`http://localhost:3000/foods/${food.id}`, food);
  }
  deleteFood(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/foods/${id}`);
  }

}
