import { Component } from "@angular/core";
import { MassageBase } from "../massage-base";

@Component({
    selector: "app-chat-message",
    templateUrl: "./chat-massage.component.html",
    styleUrls: [ "../massage-base.scss", "./chat-massage.component.scss" ]
})

export class ChatMessageComponent extends MassageBase {
}