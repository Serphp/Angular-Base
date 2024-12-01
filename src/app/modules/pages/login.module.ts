import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";	
import { Router } from "@angular/router";

@Component({
    selector: 'si-login',
    templateUrl: './login.module.html',
    styleUrls: ['./global.scss']
})
export class LoginModule {
    form: FormGroup;

    constructor(
        private AuthService: AuthService,
        private router: Router
    ) {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required)
        });
    }
    onSubmit() {
        this.AuthService.signIn(this.form.value)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
}