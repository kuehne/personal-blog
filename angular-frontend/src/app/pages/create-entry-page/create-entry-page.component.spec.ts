import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { BlogEntryService } from '../../services/blog-entry.service';
import { CreateEntryPageComponent } from './create-entry-page.component';

describe('CreateEntryPageComponent', () => {
  let component: CreateEntryPageComponent;
  let fixture: ComponentFixture<CreateEntryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CreateEntryPageComponent,
        HttpClientModule,
        NoopAnimationsModule,
      ],
      providers: [BlogEntryService, provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateEntryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
