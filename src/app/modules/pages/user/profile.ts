import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.html',
    providers: [AuthService]
})

export class ProfileModule {

    constructor(
        private Auth: Auth,
        private authService: AuthService,
    ) {
        this.authService.userState$.subscribe((user) => {
            if (user) {
                console.log('User ', user);
            } else {
                console.log('No user');
            }
        });
    }

    async signOut(): Promise<void> {
        try {
            await this.Auth.signOut();
            console.log('User signed out successfully');
        } catch (error: unknown) {
            console.log(error);
        }
    }


}