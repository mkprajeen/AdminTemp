﻿import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-time',
    //styleUrls: ['form-input.component.scss'],
    template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <label>{{ config.Label }}</label>
      <input
        id="{{config.MrFormFieldId}}"
        type="time"
        [formControlName]="config.MrFormFieldId" />
        <div *ngIf="!(group.controls[config.MrFormFieldId].valid || group.controls[config.MrFormFieldId].pristine) as variable" class="alert alert-danger" >
            <span>{{config.validationmsg}}</span>
        </div>       
    </div>`
})
export class FormTimeComponent {
    config;
    group: FormGroup;
}