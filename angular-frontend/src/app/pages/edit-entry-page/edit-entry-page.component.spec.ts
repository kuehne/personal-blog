import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { routes } from '@app/app.routes';
import { BlogEntryService } from '@app/services/blog-entry.service';
import { provideMarkdown } from 'ngx-markdown';
import { of } from 'rxjs';
import { EditEntryPageComponent } from './edit-entry-page.component';

describe('EditEntryPageComponent', () => {
  let component: EditEntryPageComponent;
  let fixture: ComponentFixture<EditEntryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEntryPageComponent, NoopAnimationsModule],
      providers: [
        provideHttpClient(),
        provideRouter(routes),
        provideMarkdown(),
        BlogEntryService,
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ entry: { title: '', teaser: '', content: '' } }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditEntryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
