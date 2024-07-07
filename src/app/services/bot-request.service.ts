import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { IChatBotResponse } from "../models/chat-bot-response.model";

@Injectable()
export class BotRequestService {
    private botMOKUrl = "../../assets/MOK.json";

    constructor(private http: HttpClient) { }

    public sendToChatBot(command: string): Observable<string> {
        return this.http.get<any>(this.botMOKUrl).pipe(
            map((chatBotResponse: IChatBotResponse) => {
                let response = chatBotResponse.commands.find(x => x.command === command)?.response;
                if (!response) {
                    response = chatBotResponse.unknownCommandResponse;
                }

                return response;
            })
        );
    }
}