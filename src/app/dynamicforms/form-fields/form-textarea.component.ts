﻿import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-textarea',
    //styleUrls: ['form-input.component.scss'],
    template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <label>{{ config.Label }}</label>
      <textarea  id="{{config.MrFormFieldId}}"
        [attr.placeholder]="config.DisplayLabel"
        [formControlName]="config.MrFormFieldId"></textarea>
        <div *ngIf="!(group.controls[config.MrFormFieldId].valid || group.controls[config.MrFormFieldId].pristine) as variable" class="alert alert-danger" >
            <span>{{config.validationmsg}}</span>
        </div>       
    </div>`
})
export class FormTextAreaComponent {
    config;
    group: FormGroup;
}