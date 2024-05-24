import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { BlogEntry } from '@app/model/blog-entry';
import { blogEntryListResolver } from './blog-entry-list.resolver';

describe('blogEntryListResolver', () => {
  const executeResolver: ResolveFn<BlogEntry[]> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      blogEntryListResolver(...resolverParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
