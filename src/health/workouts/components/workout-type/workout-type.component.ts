import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const TYPE_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => WorkoutTypeComponent),
  multi: true
};

@Component({
  selector: 'workout-type',
  providers: [TYPE_CONTROL_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['workout-type.component.scss'],
  template: `
    <div class="workout-type">
      <div
        class="workout-type__pane"
        *ngFor="let selector of selectors"
        [class.active]="selector === value"
        (click)="setSelected(selector)">
        <img src="/img/{{ selector }}.svg">
        <p>{{ selector }}</p>
      </div>
    </div>
  `
})

export class WorkoutTypeComponent implements ControlValueAccessor {

  selectors = ['strength', 'endurance'];
  value: string;

  private onTouch: Function;
  private onModelChange: Function;

  writeValue(value: string): void {
    this.value = value;
  }

  setSelected(selector: string) {
    this.value = selector;
    this.onModelChange(selector);
    this.onTouch();
  }

  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }
}
