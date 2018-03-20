import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-progressnote',
  templateUrl: './progress-note.component.html',
  styleUrls: ['./progress-note.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressNoteComponent implements OnInit {
  id: any;
  constructor(private activeroute: ActivatedRoute) { }

  ngOnInit() {
    this.activeroute.params.subscribe(params => {
      this.id = params.id; 
   });
  }

}
