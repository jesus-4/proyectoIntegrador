import { Routes } from '@angular/router';
import { FoodsComponent } from './components/foodsForms/foods.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {"path":'', component: HomeComponent},
  {"path": 'foods', component: FoodsComponent},
  {"path": 'foods/add', component: AddEditComponent},
  {"path": 'foods/edit/:id', component: AddEditComponent},
  {"path": '**', component: FoodsComponent}


];
