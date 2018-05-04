import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormArray, FormBuilder,
  Validators,ReactiveFormsModule  } from '@angular/forms';

import { Global } from '../../../global';
import { GlobalState } from '../../../global.state';
import { AuthenticationService, AuthenticationStore } from '../../../auth';
import {
  DynamicFormControlModel,
  DynamicCheckboxModel,
  DynamicInputModel,
  DynamicRadioGroupModel,
  DynamicFormService,
  DynamicFormGroupModel,
  DynamicDatePickerModel,
  DynamicFormLayout,
  DynamicSelectModel
} from "@ng-dynamic-forms/core";



@Component({
  selector: 'app-progressnotenew',
  templateUrl: './progress-note-new.component.html',
  styleUrls: ['./progress-note-new.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ProgressNoteNewComponent implements OnInit {
  tempGrpId: any;
  encounterSections: any[];
  errorMessage: any;

  formGroup: FormGroup;
  formLayout: DynamicFormLayout = {

    "stay": {
        element: {
            control: "form-row"
        }
    },

    "arrivalDate": {
        element: {
            container: "p-0",
            label: "col-form-label"
        },
        grid: {
            host: "col-sm-6"
        }
    },

    "departureDate": {
        element: {
            container: "p-0",
            label: "col-form-label"
        },
        grid: {
            host: "col-sm-6"
        }
    },
    "room": {
      element: {
          control: "form-row"
      }
  },

  "roomSize": {
      element: {
          label: "col-form-label"
      },
      grid: {
          host: "col-sm-6"
      }
  },

  "roomQuantity": {
      element: {
          container: "text-center",
          label: "col-form-label"
      },
      grid: {
          host: "col-sm-2"
      }
  },
  };


  formModel: DynamicFormControlModel[] = [

    new DynamicFormGroupModel({

      id: "stay",
      group: [
          new DynamicDatePickerModel({

              id: "arrivalDate",
              inline: false,
              label: "Arrival",
              placeholder: "Date of Arrival",
              toggleIcon: "./assets/calendar-icon.svg"
          }),

          new DynamicDatePickerModel({

              id: "departureDate",
              inline: false,
              label: "Departure",
              placeholder: "Date of Departure",
              toggleIcon: "./assets/calendar-icon.svg"
          })
      ]
    }),

    new DynamicFormGroupModel({

      id: "room",
      group: [
          new DynamicSelectModel({

              id: "roomSize",
              label: "Room Size",
              options: [
                  {
                      label: "Single Room",
                      value: "single-room"
                  },
                  {
                      label: "Double Room",
                      value: "double-room"
                  },
                  {
                      label: "Business Suite",
                      value: "business-suite"
                  },
                  {
                      label: "Presidential Suite",
                      value: "presidential-suite"
                  },
                  {
                      label: "Storeroom",
                      value: "storeroom"
                  }
              ],
              value: "single-room"
          }),

          new DynamicInputModel({

              id: "roomQuantity",
              inputType: "number",
              label: "Quantity",
              placeholder: "Quantity",
              hint: "Maximum: 5",
              max: 5,
              min: 0,
              value: 1
          })
      ]
  }),

    new DynamicInputModel({

        id: "sampleInput",
        label: "Sample Input",
        maxLength: 42,
        placeholder: "Sample input"
    }),

    new DynamicRadioGroupModel<string>({

        id: "sampleRadioGroup",
        label: "Sample Radio Group",
        options: [
            {
                label: "Option 1",
                value: "option-1",
            },
            {
                label: "Option 2",
                value: "option-2"
            },
            {
                label: "Option 3",
                value: "option-3"
            }
        ],
        value: "option-3"
    }),

    new DynamicCheckboxModel({

        id: "sampleCheckbox",
        label: "I do agree"
    })
];

  constructor(private activeroute: ActivatedRoute,
    private authServ: AuthenticationService,
    private authStore: AuthenticationStore,
    private state: GlobalState,
    private formService: DynamicFormService) {

  }

  ngOnInit() {
    this.activeroute.params.subscribe(params => {
      this.tempGrpId = params.id;
    });
    this.authServ.get(Global.BASE_API_ENDPOINT + 'templatebuilder/GetSectionsForTemplateGroup?templateGroupId=' + this.tempGrpId )
      .subscribe(enSections => {
        this.encounterSections = [];
        this.encounterSections = enSections;

        this.state.notifyDataChanged('progressnote.encounter', enSections);
        this.formGroup = this.formService.createFormGroup(this.formModel);

      },
        error => {
          this.errorMessage = error;
          console.log(this.errorMessage);
        });

  }

  formSubmitted(value) {
    console.log(value);
}

}
