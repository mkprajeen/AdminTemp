import { Component, OnInit } from '@angular/core';
import { Global } from '../../../global';
import { AuthenticationService } from '../../../auth';

@Component({
  selector: 'app-encounter-list',
  templateUrl: './encounter-list.component.html',
  styleUrls: ['./encounter-list.component.scss']
})
export class EncounterListComponent implements OnInit {
  rows = [];
  loadingIndicator: boolean = true;
  columns = [
    { prop: 'MrPatientEncounterId', sortable: true },
    { prop: 'PatientId', sortable: true },
    { prop: 'ChiefComplaint' }
  ];
  constructor(private _service: AuthenticationService) { }

  ngOnInit() {
    var url;
    url = Global.BASE_API_ENDPOINT + 'PatientEncounters';
    this._service.get(url)
      .subscribe(pagedData => {
        this.rows = pagedData;
      });
  }

}
