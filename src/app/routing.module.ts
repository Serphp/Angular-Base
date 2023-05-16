import { Routes, RouterModule } from "@angular/router";
import { HomeModule } from "./modules/pages/home.module";
import { LoginModule } from "./modules/pages/login.module";
import { RegisterModule } from "./modules/pages/register.module";
import { NgModule } from "@angular/core";

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