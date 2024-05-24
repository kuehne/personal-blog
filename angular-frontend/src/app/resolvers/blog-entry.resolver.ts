import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogEntry } from '@app/model/blog-entry';
import { BlogEntryService } from '@app/services/blog-entry.service';

export const blogEntryResolver: ResolveFn<BlogEntry> = (route) => {
  return inject(BlogEntryService).findById(route.paramMap.get('id')!);
};
