import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GlobalState } from '../../global.state';


@Component({
    selector: 'main-form',
    templateUrl: './main-form.component.html'
})
export class MainFormComponent implements OnInit {
    // @Input()
    encounterSections: any[] = [];

    public referer: FormGroup;
    public submitted: boolean;


    constructor(private fb: FormBuilder, private _state: GlobalState, ) {
        this._state.subscribe('progressnote.encounter', (enSection) => {
            this.encounterSections = enSection;

        });
    }
    ngOnInit() {


    }
    onSubmit({ value, valid }: { value: any, valid: boolean }) {
        this.submitted = true;
        console.log(value, valid);

    }

}
