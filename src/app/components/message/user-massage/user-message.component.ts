import { Component } from "@angular/core";
import { MassageBase } from "../massage-base";

@Component({
    selector: "app-user-message",
    templateUrl: "./user-message.component.html",
    styleUrls: [ "../massage-base.scss", "./user-message.component.scss" ]
})

export class UserMessageComponent extends MassageBase {
}