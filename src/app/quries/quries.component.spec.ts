import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuriesComponent } from './quries.component';

describe('QuriesComponent', () => {
  let component: QuriesComponent;
  let fixture: ComponentFixture<QuriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
