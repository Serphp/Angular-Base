import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: "navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {

    isAuthenticated = false;

    constructor(private authService: AuthService) {
        this.authService.userState$.subscribe((user) => {
            this.isAuthenticated = !!user; // Verifica si hay un usuario autenticado
        });
    }
    
    // constructor(
    //     private authService: AuthService
    // ) {
    //     this.authService.userState$.subscribe((user) => {
    //         if (user) {
    //             console.log('User ', user);
    //         } else {
    //             console.log('No user');
    //         }
    //     });
    // }

    async signOut(): Promise<void> {
        try {
            await this.authService.logout();
            console.log('User signed out successfully');
        } catch (error: unknown) {
            console.log(error);
        }
    }

}