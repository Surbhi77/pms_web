import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatePopupComponent } from './rate-popup.component';

describe('RatePopupComponent', () => {
  let component: RatePopupComponent;
  let fixture: ComponentFixture<RatePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
