import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { Store } from 'store';
// feature modules
import { AuthModule } from '../auth/auth.module';
// containers
import { AppComponent } from './containers/app/app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { HealthModule } from '../health/health.module';

// components

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'schedule' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    HealthModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}

/**
 * var config = {
    apiKey: "AIzaSyDJeXlcz2FnxWqYvfYqcTsrKmru_D_qbYI",
    authDomain: "fitness-app-7368c.firebaseapp.com",
    databaseURL: "https://fitness-app-7368c.firebaseio.com",
    projectId: "fitness-app-7368c",
    storageBucket: "fitness-app-7368c.appspot.com",
    messagingSenderId: "85253922568"
  };
 */
