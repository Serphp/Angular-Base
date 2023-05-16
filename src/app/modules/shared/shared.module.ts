import { NgModule } from "@angular/core";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { FooterComponent } from "./layout/footer/footer.component";

// This is a shared module, so we need to export the components so they can be used in other modules.
const components = [
    NavbarComponent,
    FooterComponent
];

@NgModule({
    declarations: [
        ...components
    ],
    exports: [
        ...components
    ],
})
export class SharedModule { }