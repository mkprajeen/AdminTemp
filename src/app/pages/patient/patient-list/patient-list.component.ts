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
  pageSize:number;
  currentPage:number;
  totalItems:number;

   columns = [
      { prop: 'PatientId' },
      { prop: 'FirstName' },
      { prop: 'LastName' }
      ];
  constructor( private _service:AuthenticationService ) {
    this.currentPage=0;
    this.pageSize =10;     
   }

  ngOnInit() {
    // this._service.get(Global.BASE_TEMPLATE_ENDPOINT + 'patients')
    // .subscribe(patient => {
    //   this.rows=patient;
    // });
    this.setPage({ offset: 0 });
  }
  setPage(pageInfo){
    this.currentPage = pageInfo.offset ;

    this._service.get(Global.BASE_TEMPLATE_ENDPOINT + 'patients/GetAllPagedPatients?page='+this.currentPage+'&pagesize='+this.pageSize  )
    .subscribe(pagedData => {
      this.rows=pagedData.Results;
      this.totalItems = pagedData.TotalItems;
    });
  }
 

}
