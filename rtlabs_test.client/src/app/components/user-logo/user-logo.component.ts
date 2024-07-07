import { Component, Input } from "@angular/core";
@Component({
    selector: "app-user-logo",
    templateUrl: "./user-logo.component.html",
    styleUrls: [ "./user-logo.component.scss" ]
})

export class UserLogoComponent {
    @Input() public userLogoSrc: string | null = null;

    public get src(): string {
        return !this.userLogoSrc ? "../../assets/images/defaults user logo.svg" : this.userLogoSrc; 
    }
}