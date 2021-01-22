import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntryProcessComponent } from './add-entry-process.component';

describe('AddEntryProcessComponent', () => {
  let component: AddEntryProcessComponent;
  let fixture: ComponentFixture<AddEntryProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEntryProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEntryProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
