import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EditEntryComponent } from '../../components/edit-entry/edit-entry.component';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { BlogEntry } from '../../model/blog-entry';
import { BlogEntryService } from '../../services/blog-entry.service';

@Component({
  selector: 'app-create-entry-page',
  standalone: true,
  imports: [EditEntryComponent, PageHeaderComponent],
  templateUrl: './create-entry-page.component.html',
  styleUrl: './create-entry-page.component.scss',
})
export class CreateEntryPageComponent {
  constructor(
    private readonly blogEntryService: BlogEntryService,
    private readonly router: Router
  ) {}
  newEntry: BlogEntry = {
    title: '',
    teaser: '',
    content: '',
  };

  onSubmit(blogEntry: BlogEntry): void {
    this.blogEntryService
      .create(blogEntry)
      .subscribe(() => this.router.navigateByUrl('/admin'));
  }
}
