import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ScheduleItem } from '../../../shared/services/schedule/schedule.service';

@Component({
  selector: 'schedule-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="schedule-section">
      <div class="schedule-section__bar">{{ name }}</div>
    </div>
    <div>
      <div class="schedule-section__item food" *ngIf="section.meals; else addMeal" (click)="onSelect('meals', section.meals)">
        <span>{{ section.meals | join }}</span>
      </div>
      <ng-template #addMeal>
        <div class="schedule-section__item" (click)="onSelect('meals')">
          Assign meal
        </div>
      </ng-template>
      <div class="schedule-section__item workout" *ngIf="section.workouts; else addWorkout" (click)="onSelect('workouts', section.workouts)">
        <span>{{ section.workouts | join }}</span>
      </div>
      <ng-template #addWorkout>
        <div class="schedule-section__item" (click)="onSelect('workouts')">
          Assign workout
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['schedule-section.component.scss']
})

export class ScheduleSectionComponent implements OnInit {

  @Input()
  name: string;
  @Input()
  section: ScheduleItem;
  @Output()
  select = new EventEmitter<any>();

  ngOnInit() {
  }

  onSelect(type: String, assigned: string[] = []) {
    const data = this.section;
    this.select.emit({
      type,
      assigned,
      data
    })
  }
}
