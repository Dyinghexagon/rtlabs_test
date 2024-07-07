import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-select-language",
    templateUrl: "./select-language.component.html",
    styleUrls: [ "./select-language.component.scss" ]
})

export class SelectLanguage {
    constructor(
        private readonly translateService: TranslateService
    ) {}

    public setLaunguage(language: string): void {
        this.translateService.use(language);
    }
}
