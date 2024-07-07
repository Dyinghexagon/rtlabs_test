import { Component, Input } from "@angular/core";
import { environment } from "../../../environments/environment";
@Component({
    selector: "app-user-logo",
    templateUrl: "./user-logo.component.html",
    styleUrls: [ "./user-logo.component.scss" ]
})

export class UserLogoComponent {
    @Input() public userLogoSrc: string | null = null;

    public get src(): string {
        const defaultUserLogo = environment.production ? `${environment.baseUrl}/assets/images/user_logo.svg` : "../../assets/images/user_logo.svg`"
        return !this.userLogoSrc ? defaultUserLogo : this.userLogoSrc; 
    }
}