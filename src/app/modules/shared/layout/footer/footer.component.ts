import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/services/version.service';

@Component({
    selector: 'footer',
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.scss"]
})
export class FooterComponent {
    version: string | undefined;
    public currentYear: number = new Date().getFullYear();
    title: string = 'Footer';

    constructor(
        private versionService: VersionService
    ) {}

    ngOnInit(): void { 
        this.version = this.versionService.getVersion();
        console.log('Working footer');
    }
}