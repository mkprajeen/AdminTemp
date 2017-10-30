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
  pageSize: number;
  currentPage: number;
  totalItems: number;

  orderBy: string;
  orderByDesc: boolean = false;

  columns = [
    { prop: 'PatientId', sortable: true },
    { prop: 'FirstName', sortable: true },
    { prop: 'LastName' }
  ];
  constructor(private _service: AuthenticationService) {
    this.currentPage = 0;
    this.pageSize = 10;
  }

  ngOnInit() {
    // this._service.get(Global.BASE_TEMPLATE_ENDPOINT + 'patients')
    // .subscribe(patient => {
    //   this.rows=patient;
    // });
    this.setPage({ offset: 0 });
  }
  setPage(pageInfo) {
    this.currentPage = pageInfo.offset;
    var url;
    if (this.orderBy) { 
      if(this.orderByDesc){
       url = Global.BASE_TEMPLATE_ENDPOINT + 'patients/GetAllPagedPatients?offset=' + this.currentPage + '&limit=' + this.pageSize +'&orderBy='+ this.orderBy +'&orderByDesc=' + this.orderByDesc ;
      }
      else{
        url = Global.BASE_TEMPLATE_ENDPOINT + 'patients/GetAllPagedPatients?offset=' + this.currentPage + '&limit=' + this.pageSize +'&orderBy='+ this.orderBy ; 
      }
    }
    else {
       url = Global.BASE_TEMPLATE_ENDPOINT + 'patients/GetAllPagedPatients?offset=' + this.currentPage + '&limit=' + this.pageSize;
    }
    this._service.get(url)
      .subscribe(pagedData => {
        this.rows = pagedData.Results;
        this.totalItems = pagedData.TotalItems;
        this.currentPage = pagedData.CurrentPage;
      });
  }
  onSort(event) {
    // event was triggered, start sort sequence
    console.log('Sort Event', event);
    const sort = event.sorts[0];
    this.orderBy = sort.prop;
    this.orderByDesc = sort.dir === 'desc' ? true : false;

    this.setPage({ offset: this.currentPage } );
  }


}
