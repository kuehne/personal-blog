import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeasersComponent } from './list-teasers.component';

describe('ListTeasersComponent', () => {
  let component: ListTeasersComponent;
  let fixture: ComponentFixture<ListTeasersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTeasersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTeasersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
