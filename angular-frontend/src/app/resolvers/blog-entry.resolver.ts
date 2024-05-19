import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogEntry } from '../model/blog-entry';
import { BlogEntryService } from '../services/blog-entry.service';

export const blogEntryResolver: ResolveFn<BlogEntry> = (route) => {
  return inject(BlogEntryService).findById(route.paramMap.get('id')!);
};
