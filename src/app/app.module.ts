
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

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