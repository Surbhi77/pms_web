import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginListingComponent } from './begin-listing.component';

describe('BeginListingComponent', () => {
  let component: BeginListingComponent;
  let fixture: ComponentFixture<BeginListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
