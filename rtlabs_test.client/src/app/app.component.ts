import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss"
})
export class AppComponent {
    private readonly _currentLang = "ru";

    title = "rtlabs_test.client";

    constructor(private readonly translateService: TranslateService) {
        this.translateService.use(this._currentLang);
        document.documentElement.lang = this._currentLang;
    }
}
