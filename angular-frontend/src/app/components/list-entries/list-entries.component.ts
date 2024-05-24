import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { BlogEntry } from '@app/model/blog-entry';
import { BlogEntryService } from '@app/services/blog-entry.service';

@Component({
  selector: 'app-list-entries',
  standalone: true,
  imports: [MatTableModule, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './list-entries.component.html',
  styleUrl: './list-entries.component.scss',
})
export class ListEntriesComponent {
  @Input({ required: true })
  public entries!: BlogEntry[];
  constructor(
    private readonly blogEntryService: BlogEntryService,
    private readonly router: Router
  ) {}
  displayedColumns: string[] = ['id', 'title', 'teaser', 'actions'];

  onDelete(blogEntry: BlogEntry): void {
    if (blogEntry.id) {
      this.blogEntryService.delete(blogEntry?.id).subscribe(() => {
        this.router.navigateByUrl('/admin');
      });
    } else {
      window.alert('Entry does not exist.');
    }
  }
}
