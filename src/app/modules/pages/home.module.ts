import { Component } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/compat/auth";
import { User } from "firebase/auth";
import { AuthService } from "src/app/services/auth.service";
import { switchMap } from "rxjs";
import { firebaseConfig } from "src/app/environments/environment";

@Component({
    selector: 'si-home',
    templateUrl: './home.module.html',
    styleUrls: ['./global.scss']
})
export class HomeModule {



    constructor(
        private AfAuth: AngularFireAuth,
        private AuthService: AuthService) { }


    login({ email, password }: any) {
        this.AuthService.login({ email, password });
    }

    logout() {
        this.AuthService.logout();
    }




}