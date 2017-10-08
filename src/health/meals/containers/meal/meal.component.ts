import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Meal, MealsService } from '../../../shared/services/meals/meals.service';

@Component({
  selector: 'meal',
  template: `
    <div class="meal">
      <div class="meal__title">
        <h1>
          <img src="/img/food.svg">
          <span>Create meal</span>
        </h1>
      </div>
      <div>
        <meal-form (create)="addMeal($event)"></meal-form>
      </div>
    </div>
  `,
  styleUrls: ['meal.component.scss']
})

export class MealComponent implements OnInit {
  constructor(private mealsService: MealsService, private router: Router) {
  }

  ngOnInit() {
  }

  async addMeal(event: Meal) {
    await this.mealsService.addMeal(event);
    this.backToMeals();
  }

  private backToMeals() {
    this.router.navigate(['meals']);
  }
}
