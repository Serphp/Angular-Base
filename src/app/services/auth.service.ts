import { Injectable, inject } from '@angular/core';
import { 
  Auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  signInWithPopup, 
  sendEmailVerification,
  //sendPasswordResetEmail,
  //UserCredential,
  User,
  GoogleAuthProvider,
  authState } from '@angular/fire/auth';
  import { environment } from '../environments/environment';
import { Router } from '@angular/router';

interface ErrorResponse {
  code: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router)
  // private readonly googleProvider = inject(GoogleAuthProvider)

  constructor(
    private Auth2: Auth,
  ) { }

  get userState$(){
    return authState(this.auth);
  }

  isAthenticated(): boolean {
    return this.Auth2.currentUser !== null;
  }

  //new method
  async signIn({email, password}: any): Promise<void> {
    try {
      const { user } = await signInWithEmailAndPassword(this.auth, email, password);
      this.checkUserIsVerified(user);
      console.log('User ', user);
      this.router.navigate(['/']);
  } catch (error: unknown) {
    const { code, message } = error as ErrorResponse;
    console.log('Code ', code);
    console.log('Message ', message);
  }
  }

  async signUp(email: string, password: string): Promise<void> {
    try {
      const { user } = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      await this.sendEmailVerification(user);
      //this.router.navigate(['/user/email-verification']);
    } catch (error: unknown) {
      const { code, message } = error as ErrorResponse;
      console.log('Code ', code);
      console.log('Message ', message);
    }
  }

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.Auth2, email, password);
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.Auth2, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.Auth2, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.Auth2);
  }

  async sendEmailVerification(user: User): Promise<void> {
    try {
      await sendEmailVerification(user);
    } catch (error: unknown) {
      console.log(error);
    }
  }

  private checkUserIsVerified(user: User): void {
    const route = user.emailVerified ? '/user/profile' : '/user/email-verification';
    this.router.navigate([route]);
  }
}