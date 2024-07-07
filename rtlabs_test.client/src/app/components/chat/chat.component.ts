import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { BotRequestService } from "../../services/bot-request.service";
import { TranslateService } from "@ngx-translate/core";
import { lastValueFrom, Subject, switchMap, takeUntil } from "rxjs";

@Component({
    selector: "app-chat",
    templateUrl: "./chat.component.html",
    styleUrls: [ "./chat.component.scss" ]
})

export class ChatComponent implements OnInit {

    @ViewChild("chatInput") public chatInput: ElementRef<HTMLTextAreaElement> | null = null;

    public messages: BaseMessage[] = [];

    protected readonly unsubscribe$ = new Subject<void>();

    constructor(
        private readonly botRequestService: BotRequestService,
        private readonly translateService: TranslateService,
    ) {}

    public async ngOnInit(): Promise<void> {
        const firstChatBotMassage = await lastValueFrom(this.translateService.get("CHAT.FIRST_CHAT_BOT_MESSAGE"));
        this.messages.push(new BotMessage(firstChatBotMassage));
    }

    public get chatInputIsEmpty(): boolean {
        const command = this.chatInput?.nativeElement.value;
        return command?.length === 0;
    }

    public async send(): Promise<void> {
        if (!this.chatInput) {
            return;
        }

        const command = this.chatInput.nativeElement.value;

        if (this.chatInputIsEmpty) {
            return;
        }

        this.messages.push(new UserMessage(command));
    
        this.botRequestService.sendToChatBot(command).subscribe((response: string) => {
            this.messages.push(new BotMessage(response));
            this.cleanupChatInput();
        });
    }

    private cleanupChatInput(): void {
        if (this.chatInput?.nativeElement.value) {
            this.chatInput.nativeElement.value = "";
        }
    }
}
export class BaseMessage {
    public readonly type: "BotMessage" | "UserMessage" = "BotMessage";

    constructor(public text: string) { }
}

export class BotMessage extends BaseMessage {
    public override type: "BotMessage" | "UserMessage" = "BotMessage";

    constructor(text: string) { 
        super(text);
    }
}
  
export class UserMessage extends BaseMessage {
    public override type: "BotMessage" | "UserMessage" = "UserMessage";

    constructor(text: string) { 
        super(text);
    }
}

