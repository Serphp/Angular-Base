
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SIRoutes } from './routing.module';	
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';

// Firebase services + environment module
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { firebaseConfig } from './environments/environment';

// Pages
import { HomeModule } from './modules/pages/home.module';
import { LoginModule } from './modules/pages/login.module';
import { RegisterModule } from './modules/pages/register.module';

//
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule  } from '@angular/material/button';
import { MatInputModule  } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

const Material = [
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  MatCardModule,
  FormsModule
]
const firebase = [
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireAuthModule,
  AngularFireStorageModule,
  provideFirebaseApp(() => initializeApp(firebaseConfig)),
  provideAuth(() => getAuth())
];

const modules = [
  BrowserModule,
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
    SIRoutes,
    ...Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }