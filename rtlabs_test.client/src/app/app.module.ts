import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ChatComponent } from "./components/chat/chat.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { UserLogoComponent } from "./components/user-logo/user-logo.component";
import { UserMessageComponent } from "./components/message/user-massage/user-message.component";
import { ChatMessageComponent } from "./components/message/chat-massage/chat-massage.component";
import { BotRequestService } from "./services/bot-request.service";
import { SelectLanguage } from "./components/select-language/select-language.component";

@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        UserLogoComponent,
        UserMessageComponent,
        ChatMessageComponent,
        SelectLanguage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
    ],
    providers: [
        TranslateService,
        BotRequestService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, "../assets/i18n/", ".json");
}
