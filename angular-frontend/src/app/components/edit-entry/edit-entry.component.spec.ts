import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EditEntryComponent } from './edit-entry.component';

describe('EditEntryComponent', () => {
  let component: EditEntryComponent;
  let fixture: ComponentFixture<EditEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEntryComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EditEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
