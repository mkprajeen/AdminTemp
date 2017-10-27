import { Component, OnInit } from '@angular/core';

import { Global } from '../../../global';
import { AuthenticationService } from '../../../auth';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  editing = {};
  rows = [];
  temp = [];
  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  // columns = [
  //   { prop: 'name' },
  //   { name: 'Gender' },
  //   { name: 'Company' }
  //   ];

    columns = [
      { prop: 'PatientId' },
      { prop: 'FirstName' },
      { prop: 'LastName' }
      ];
  constructor( private _service:AuthenticationService ) {

      // this.rows = [
      // { PatientId: '10', FirstName: 'prajeen', LastName: 'kumar' },
      // { PatientId: '20', FirstName: 'ravan', LastName: 'sathi' },
      // { PatientId: '30', FirstName: 'vasu', LastName: 'dev' },
      // ];
    
   }

  ngOnInit() {
    this._service.get(Global.BASE_TEMPLATE_ENDPOINT + 'patients')
    .subscribe(patient => {
      this.rows=patient;
    });
  }

 

}
