import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  styleUrls: ['schedule-days.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'schedule-days',
  template: `
    <div class="days">
      <button type="button" class="day" *ngFor="let day of days; index as i;">
        <span [class.active]="i === selected" (click)="selectDay(i)">{{ day }}</span>
      </button>      
    </div>
  `
})

export class ScheduleDaysComponent {

  days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  @Input()
  selected: number;

  @Output()
  select = new EventEmitter<number>();

  selectDay(index: number) {
    this.select.emit(index);
  }
}
