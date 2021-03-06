﻿import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-button',
    //styleUrls: ['form-button.component.scss'],
    template: `
    <div 
      class="dynamic-field form-button"
      [formGroup]="group">
      <button type="submit">
        {{ config.Label }}
      </button>
    </div>
  `
})
export class FormButtonComponent //implements Field
{
    config;
    group: FormGroup;
}