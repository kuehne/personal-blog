import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { routes } from '../../app.routes';
import { DisplayEntryComponent } from '../../components/display-entry/display-entry.component';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { DisplayEntryPageComponent } from './display-entry-page.component';

describe('DisplayEntryPageComponent', () => {
  let component: DisplayEntryPageComponent;
  let fixture: ComponentFixture<DisplayEntryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DisplayEntryPageComponent,
        PageHeaderComponent,
        DisplayEntryComponent,
      ],
      providers: [
        provideRouter(routes),
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ entry: { title: '', teaser: '', content: '' } }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayEntryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
