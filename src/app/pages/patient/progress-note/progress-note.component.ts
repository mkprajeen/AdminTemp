import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Global } from '../../../global';
import { GlobalState } from '../../../global.state';
import { AuthenticationService, AuthenticationStore } from '../../../auth';

@Component({
  selector: 'app-progressnote',
  templateUrl: './progress-note.component.html',
  styleUrls: ['./progress-note.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressNoteComponent implements OnInit {
  tempGrpId: any;
  encounterSections: any[];
  errorMessage: any;

  constructor(private activeroute: ActivatedRoute,
    private authServ: AuthenticationService,
    private authStore: AuthenticationStore,
    private state: GlobalState) {

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
