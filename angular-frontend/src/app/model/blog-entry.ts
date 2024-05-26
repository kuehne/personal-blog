import { BlogEntryInput } from '@app/model/blog-entry-input';

/**
 * Basic DTO for BlogEntries
 */
export interface BlogEntry extends BlogEntryInput {
  id: number;
  htmlContent: string;
  htmlTeaser: string;
  createdAt: Date;
}
