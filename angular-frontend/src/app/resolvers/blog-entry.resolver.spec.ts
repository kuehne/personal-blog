import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { BlogEntry } from '../model/blog-entry';
import { blogEntryResolver } from './blog-entry.resolver';

describe('blogEntryResolver', () => {
  const executeResolver: ResolveFn<BlogEntry> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      blogEntryResolver(...resolverParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
