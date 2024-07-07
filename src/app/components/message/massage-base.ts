import { Directive, Input } from "@angular/core";

@Directive()
export class MassageBase {
    @Input() public massageValue: string = "";
}