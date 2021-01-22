import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceProcessComponent } from './invoice-process.component';

describe('InvoiceProcessComponent', () => {
  let component: InvoiceProcessComponent;
  let fixture: ComponentFixture<InvoiceProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
