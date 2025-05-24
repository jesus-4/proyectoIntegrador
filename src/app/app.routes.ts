import { Routes } from '@angular/router';
import { FoodsComponent } from './components/foodsForms/foods.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';

export const routes: Routes = [
  {"path": 'foods', component: FoodsComponent
  },
  {"path": 'foods/add', component: AddEditComponent},
  {"path": 'foods/edit/:id', component: AddEditComponent},
  {"path": '**', component: FoodsComponent}


];
