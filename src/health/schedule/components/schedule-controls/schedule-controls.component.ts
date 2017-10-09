import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  styleUrls: ['schedule-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'schedule-controls',
  template: `
    <div class="controls">
      <button type="button" (click)="moveDate(offset - 1)">
        <img src="/img/chevron-left.svg">
      </button>
      <p> {{ selected | date:'yMMMMd' }}</p>
      <button type="button" (click)="moveDate(offset + 1)">
        <img src="/img/chevron-right.svg">
      </button>
    </div>`
})
export class ScheduleControlsComponent implements OnInit {

  offset = 0;

  @Input()
  selected: Date;

  @Output()
  move = new EventEmitter<number>();

  ngOnInit() {
  }

  moveDate(offset: number) {
    this.offset = offset;
    this.move.emit(offset);
  }
}
