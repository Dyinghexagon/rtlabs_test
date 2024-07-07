import { ICommand } from "./command.model";

export interface IChatBotResponse {
    commands: ICommand[];
    unknownCommandResponse: string;
}