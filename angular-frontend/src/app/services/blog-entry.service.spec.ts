import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { BlogEntry } from '@app/model/blog-entry';
import { environment } from '@env/environment';
import { BlogEntryService } from './blog-entry.service';
describe('BlogEntryService', () => {
  let mockBlogEntry: BlogEntry;
  let service: BlogEntryService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(BlogEntryService);
    httpTestingController = TestBed.inject(HttpTestingController);
    mockBlogEntry = {
      content: 'content',
      teaser: 'teaser',
      id: 1,
      title: 'title',
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should find all blog entries', () => {
    service.findAll().subscribe((blogEntries) => {
      expect(blogEntries).toEqual([mockBlogEntry]);
    });
    httpTestingController
      .expectOne(`${environment.apiUrl}/entries`)
      .flush([mockBlogEntry]);
  });

  it('should find a single blog entry by ID', () => {
    service.findById('1234').subscribe((blogEntry) => {
      expect(blogEntry).toEqual(mockBlogEntry);
    });
    httpTestingController
      .expectOne(`${environment.apiUrl}/entries/1234`)
      .flush(mockBlogEntry);
  });

  it('should create a blog entry', () => {
    service.create(mockBlogEntry).subscribe((blogEntry) => {
      expect(blogEntry).toEqual(mockBlogEntry);
    });
    httpTestingController
      .expectOne(`${environment.apiUrl}/entries`)
      .flush(mockBlogEntry);
  });

  it('should update a blog entry', () => {
    service.update(1234, mockBlogEntry).subscribe((blogEntry) => {
      expect(blogEntry).toEqual(mockBlogEntry);
    });
    httpTestingController
      .expectOne(`${environment.apiUrl}/entries/1234`)
      .flush(mockBlogEntry);
  });

  it('should delete a blog entry', () => {
    service.delete(1234).subscribe((deleted) => {
      expect(deleted).toBeTrue();
    });
    httpTestingController
      .expectOne(`${environment.apiUrl}/entries/1234`)
      .flush(true);
  });
});
