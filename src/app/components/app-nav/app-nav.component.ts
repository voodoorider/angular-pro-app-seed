import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="app-nav">
      <div class="wrapper">
        <a routerLink="schedule" routerLinkActive="active">Schedule</a>
        <a routerLink="meals" routerLinkActive="active">Meals</a>
        <a routerLink="workouts" routerLinkActive="active">Workouts</a>
      </div>
    </div>

  `,
  styleUrls: ['app-nav.component.scss']
})

export class AppNavComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
