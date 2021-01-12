import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KapSurveyComponent } from './kap-survey.component';

describe('KapSurveyComponent', () => {
  let component: KapSurveyComponent;
  let fixture: ComponentFixture<KapSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KapSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KapSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
