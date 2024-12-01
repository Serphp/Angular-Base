import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
    selector: 'si-register',
    templateUrl: './register.module.html',
    styleUrls: ['./global.scss']
})
export class RegisterModule {
    form!: FormGroup;

    type: 'login' | 'signup' | 'reset' = 'signup';
    loading = false;
  
    invalidName = false;
    valid = null;
    serverMessage: string | undefined;
  
    constructor(
      private AuthService: AuthService,
      private router: Router,
      private afAuth: AngularFireAuth, 
      private fb: FormBuilder) {}
  
    ngOnInit() {
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [Validators.minLength(6), Validators.required]
        ],
        passwordConfirm: ['', []]
      });
    }

    signInWithGoogle() {
      this.AuthService.loginWithGoogle()
        .then((res) => {
          this.router.navigate(['/']);
          console.log(res);
        }
        ).catch((err) => console.log(err));
    }

  
    changeType(val: string) {
      this.type = val as 'login' | 'signup' | 'reset';
    }
  
    get isLogin() {
      return this.type === 'login';
    }
  
    get isSignup() {
      return this.type === 'signup';
    }
  
    get isPasswordReset() {
      return this.type === 'reset';
    }
  
    get email() {
        return this.form ? this.form.get('email') : null;
      }
    get password() {
      return this.form ? this.form.get('password') : null ;
    }
  
    get passwordConfirm() {
      return this.form ? this.form.get('passwordConfirm') : null;
    }
  
    get passwordDoesMatch() {
        if (this.type !== 'signup') {
          return true;
        } else {
          const password = this.password?.value;
          const passwordConfirm = this.passwordConfirm?.value;
          return password !== null && passwordConfirm !== null && password === passwordConfirm;
        }
      }
  
    async onSubmit() {
      this.loading = true;
  
      const email = this.email?.value;
      const password = this.password?.value;
  
      try {
        if (this.isLogin) {
          await this.afAuth.signInWithEmailAndPassword(email, password);
        }
        if (this.isSignup) {
          await this.afAuth.createUserWithEmailAndPassword(email, password);
        }
        if (this.isPasswordReset) {
          await this.afAuth.sendPasswordResetEmail(email);
          this.serverMessage = 'Check your email';
        }
      } catch (err) {
        console.log(err);
      }
  
      this.loading = false;
    }
  }
