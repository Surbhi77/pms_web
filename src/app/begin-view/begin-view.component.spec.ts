import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginViewComponent } from './begin-view.component';

describe('BeginViewComponent', () => {
  let component: BeginViewComponent;
  let fixture: ComponentFixture<BeginViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
