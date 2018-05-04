import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressNoteNewComponent } from './progress-note-new.component';

describe('ProgressNoteNewComponent', () => {
  let component: ProgressNoteNewComponent;
  let fixture: ComponentFixture<ProgressNoteNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressNoteNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressNoteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
