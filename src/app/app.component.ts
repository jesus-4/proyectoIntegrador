import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodsComponent } from "./components/foodsForms/foods.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FoodsComponent, FoodsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyectoIntegrador';
}
