import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared/shared.module';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'login', loadChildren: './login/login.module#LoginModule'},
      {path: 'register', loadChildren: './register/register.module#RegisterModule'}
    ]
  }
];

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyDJeXlcz2FnxWqYvfYqcTsrKmru_D_qbYI',
  authDomain: 'fitness-app-7368c.firebaseapp.com',
  databaseURL: 'https://fitness-app-7368c.firebaseio.com',
  projectId: 'fitness-app-7368c',
  storageBucket: 'fitness-app-7368c.appspot.com',
  messagingSenderId: '85253922568'
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {
}
