import { Component, OnInit } from '@angular/core';

import { Global } from '../../../global';
import { AuthenticationService, AuthenticationStore } from '../../../auth';
import { GlobalState } from '../../../global.state'

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
  constructor(private _service: AuthenticationService,
    private authStore: AuthenticationStore,
    private state: GlobalState) {
    this.currentPage = 0;
    this.pageSize = 10;
    this.totalItems =0;
  }

  ngOnInit() {
    // this._service.get(Global.BASE_API_ENDPOINT + 'patients')
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
       url = Global.BASE_API_ENDPOINT + 'patients/GetAllPatientsPaged?offset=' + this.currentPage + '&limit=' + this.pageSize +'&orderBy='+ this.orderBy +'&orderByDesc=' + this.orderByDesc ;
      }
      else{
        url = Global.BASE_API_ENDPOINT + 'patients/GetAllPatientsPaged?offset=' + this.currentPage + '&limit=' + this.pageSize +'&orderBy='+ this.orderBy ; 
      }
    }
    else {
       url = Global.BASE_API_ENDPOINT + 'patients/GetAllPatientsPaged?offset=' + this.currentPage + '&limit=' + this.pageSize;
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
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
    if( selected[0] != null){
      this.authStore.SelectedPatient = selected[0];
      this.state.notifyDataChanged("selected.patient", selected[0]);
    }
  
  } 

  onAdd(){
    var url;
    url = Global.BASE_API_ENDPOINT + 'patients';
    this._service.post(url, 
      {FirstName:'prajeen1',
      LastName:'Kumar1',
      Sex:1,
      PatientStatus:1,
      DateCreated:'2017-11-27',
      DateLastUpdated:'2017-11-27',
      CreatedByUserId:12,
      LastUpdatedByUserId:12} )
    .subscribe(newPatient => {
      var patient = newPatient.Results;
    });

  }

  onUpdate(){
    if(this.authStore.SelectedPatient === null || this.authStore.SelectedPatient==='Undefind') 
      {
        return;
      }
    else{
      var patient = this.authStore.SelectedPatient;
        patient.FirstName ="prajeen API Update1 ";
      var url;
      url = Global.BASE_API_ENDPOINT + 'patients';
      this._service.put(url, patient )
      .subscribe(newPatient => {
        var result = newPatient.Results;
    });
    }
  } 


}
