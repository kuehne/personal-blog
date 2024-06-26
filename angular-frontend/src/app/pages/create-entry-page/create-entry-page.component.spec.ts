import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';
import { routes } from '@app/app.routes';
import { BlogEntryService } from '@app/services/blog-entry.service';
import { CreateEntryPageComponent } from './create-entry-page.component';

describe('CreateEntryPageComponent', () => {
  let component: CreateEntryPageComponent;
  let fixture: ComponentFixture<CreateEntryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEntryPageComponent, NoopAnimationsModule],
      providers: [
        BlogEntryService,
        provideRouter(routes),
        provideMarkdown(),
        provideHttpClient(withInterceptorsFromDi()),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateEntryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
