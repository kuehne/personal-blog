import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { BlogEntryService } from './blog-entry.service';

describe('BlogEntryService', () => {
  let service: BlogEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(BlogEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
