import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceMediaComponent } from './invoice-media.component';

describe('InvoiceMediaComponent', () => {
  let component: InvoiceMediaComponent;
  let fixture: ComponentFixture<InvoiceMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
