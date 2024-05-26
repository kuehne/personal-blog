import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { routes } from '@app/app.routes';
import { DisplayEntryComponent } from './display-entry.component';

describe('DisplayEntryComponent', () => {
  let component: DisplayEntryComponent;
  let fixture: ComponentFixture<DisplayEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayEntryComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayEntryComponent);
    component = fixture.componentInstance;
    component.entry = {
      id: 2,
      htmlContent: '<div>test</div>',
      htmlTeaser: '<div>teaser</div>',
      teaser: 'test',
      title: 'title',
      content: 'content',
      createdAt: new Date(),
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
