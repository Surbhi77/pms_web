import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsCheckingComponent } from './terms-checking.component';

describe('TermsCheckingComponent', () => {
  let component: TermsCheckingComponent;
  let fixture: ComponentFixture<TermsCheckingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsCheckingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
