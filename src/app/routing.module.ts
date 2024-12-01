import { Routes, RouterModule } from "@angular/router";
import { HomeModule } from "./modules/pages/home.module";
import { LoginModule } from "./modules/pages/login.module";
import { RegisterModule } from "./modules/pages/register.module";
import { NgModule } from "@angular/core";
import { ProfileModule } from "./modules/pages/user/profile";

const routes: Routes = [
    {
        path: '',
        component: HomeModule
    },
    {
        path: 'login',
        component: LoginModule
    },
    {
        path: 'register', 
        component: RegisterModule
    },
    {
        path: 'profile',
        component: ProfileModule
    }

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class SIRoutes {}