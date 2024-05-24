import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, provideRouter } from '@angular/router';
import { routes } from '@app/app.routes';
import { DisplayEntryComponent } from '@app/components/display-entry/display-entry.component';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { of } from 'rxjs';
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
