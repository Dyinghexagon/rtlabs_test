import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { IChatBotResponse } from "../models/chat-bot-response.model";
import { environment } from "../../environments/environment";

@Injectable()
export class BotRequestService {
    constructor(private http: HttpClient) { }

    public sendToChatBot(command: string): Observable<string> {
        return this.http.get<any>(`${environment.baseUrl}/assets/MOK.json`).pipe(
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