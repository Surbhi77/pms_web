import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrutionsComponent } from './instrutions.component';

describe('InstrutionsComponent', () => {
  let component: InstrutionsComponent;
  let fixture: ComponentFixture<InstrutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
