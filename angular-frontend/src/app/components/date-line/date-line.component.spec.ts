import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateLineComponent } from './date-line.component';

describe('DateLineComponent', () => {
  let component: DateLineComponent;
  let fixture: ComponentFixture<DateLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
