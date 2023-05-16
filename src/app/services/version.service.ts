import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class VersionService {
    private version: string = '1.0.0';

    public getVersion(): string {
        return this.version;
    }
}