import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
//import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from './environments/environment';
import { HomeModule } from './modules/pages/home.module';
import { LoginModule } from './modules/pages/login.module';
import { RegisterModule } from './modules/pages/register.module';
import { SIRoutes } from './routing.module';

const firebase = [
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireAuthModule,
  AngularFireStorageModule,
  //AngularFirestoreModule,
  //AngularFireDatabaseModule
];

const modules = [
  BrowserModule,
  AppRoutingModule,
  SharedModule,
];

const Pages = [
  HomeModule,
  LoginModule,
  RegisterModule
]

////////////////////////////////

@NgModule({
  declarations: [
    AppComponent,
    ...Pages
  ],
  imports: [
    ...modules,
    ...firebase,
    SIRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
