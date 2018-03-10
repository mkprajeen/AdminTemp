import { Component, OnInit } from '@angular/core';
import { Global } from '../../../global';
import { AuthenticationService } from '../../../auth';
import {GlobalState} from '../../../global.state';

@Component({
  selector: 'app-encounter-list',
  templateUrl: './encounter-list.component.html',
  styleUrls: ['./encounter-list.component.scss']
})
export class EncounterListComponent implements OnInit {
  rows = [];
  Patient: any;
  loadingIndicator: boolean = true;
  // columns = [
  //   { prop: 'MrPatientEncounterId', sortable: true },
  //   { prop: 'PatientId', sortable: true },
  //   { prop: 'ChiefComplaint' }
  // ];
  constructor(private _service: AuthenticationService,
    private _state:GlobalState) {
      
      this._state.subscribe('selected.patient', (spatient) => {
        this.Patient = spatient;
      });
    }

  ngOnInit() {
    var url;
    url = Global.BASE_API_ENDPOINT + 'PatientEncounters';
    this._service.get(url)
      .subscribe(pagedData => {
        this.rows = pagedData;
      });
  }
  OnChiefComplaint(row:any){
    console.log(row);
  }
  onEncounterDelete(row:any){
    var url;
    console.log(row);
    url = Global.BASE_API_ENDPOINT + 'PatientEncounters';
    this._service.deleteWithBody(url,row)
      .subscribe(pagedData => {
        this.rows = pagedData;
      });
  }
}
