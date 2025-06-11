import { Component, inject, OnInit } from '@angular/core';

import { FormControl,FormGroup, FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';
import { Food } from '../../model/Food';
import { FoodService } from '../../services/food.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss'
})
export class AddEditComponent implements OnInit {
  public edit : boolean = false;
  public foodForm! : FormGroup;

  constructor(private Router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private foodService: FoodService
  ) {

  }
  ngOnInit(): void {
    this.initFormFood();
    if (this.Router.url.includes('edit')) {
      this.activatedRoute.params.forEach((params: Params) => {
        this.editFood(params['id']);
      });
    }
  }

initFormFood() {
  this.foodForm = this.formBuilder.group({
    id: [''],
    name: ['', [Validators.required]],
    price: [0,[ Validators.required, Validators.min(0.01)]],
    description: [''],
    imageUrl: [''],
    protein: [0, [Validators.required,Validators.min(0)]],
    carbohydrate: [0, [Validators.required, Validators.min(0)]],
    fat: [0, [Validators.required, Validators.min(0)]]
  });
}


  onSubmit() {
    if (this.foodForm.valid) {
      const food: Food = this.foodForm.getRawValue() as Food;
      if (!this.edit) {
        // Create food
        const {id,...newFood} = food;
        this.foodService.createFood(newFood).subscribe({
          next: () => {this.Router.navigate(['foods']);}});
      } else {
        // Update food
        this.foodService.updateFood(food).subscribe({
          next:() =>  {this.Router.navigate(['foods']);}});
      }
    }
  }


  editFood(id: string) {
    this.foodService.getFoodById(id)
    .subscribe(food =>{this.foodForm.patchValue(food);
    });
    this.edit = true;
  }


  onCancel() {
    this.Router.navigate(['foods']);
  }
}
