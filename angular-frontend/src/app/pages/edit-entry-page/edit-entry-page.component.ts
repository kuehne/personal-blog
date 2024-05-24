import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditEntryComponent } from '@app/components/edit-entry/edit-entry.component';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { BlogEntry } from '@app/model/blog-entry';
import { BlogEntryService } from '@app/services/blog-entry.service';

@Component({
  selector: 'app-edit-entry-page',
  standalone: true,
  imports: [EditEntryComponent, CommonModule, PageHeaderComponent],
  templateUrl: './edit-entry-page.component.html',
  styleUrl: './edit-entry-page.component.scss',
})
export class EditEntryPageComponent implements OnInit {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly blogEntryService: BlogEntryService,
    private readonly router: Router
  ) {}
  protected entry: BlogEntry | null = null;
  ngOnInit() {
    this.activatedRoute.data.subscribe(({ entry }) => {
      this.entry = entry;
    });
  }
  onSubmit(blogEntry: BlogEntry): void {
    this.blogEntryService
      .create(blogEntry)
      .subscribe(() => this.router.navigateByUrl('/admin'));
  }
}
