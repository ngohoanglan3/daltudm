import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestExamComponent } from './nearest-exam.component';

describe('NearestExamComponent', () => {
  let component: NearestExamComponent;
  let fixture: ComponentFixture<NearestExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearestExamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NearestExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
