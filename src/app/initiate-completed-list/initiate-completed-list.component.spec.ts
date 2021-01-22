import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateCompletedListComponent } from './initiate-completed-list.component';

describe('InitiateCompletedListComponent', () => {
  let component: InitiateCompletedListComponent;
  let fixture: ComponentFixture<InitiateCompletedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiateCompletedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiateCompletedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
