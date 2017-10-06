import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'schedule', loadChildren: './scheduler/schedule.module#ScheduleModule' },
  { path: 'meals', loadChildren: './meals/meals.module#MealsModule' },
  { path: 'workouts', loadChildren: './workouts/workouts.module#WorkoutsModule' }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class HealthModule {
}
