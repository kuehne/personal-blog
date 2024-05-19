import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { routes } from '../../app.routes';
import { BlogEntryService } from '../../services/blog-entry.service';
import { EditEntryPageComponent } from './edit-entry-page.component';

describe('EditEntryPageComponent', () => {
  let component: EditEntryPageComponent;
  let fixture: ComponentFixture<EditEntryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEntryPageComponent, HttpClientModule, NoopAnimationsModule],
      providers: [
        provideRouter(routes),
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
