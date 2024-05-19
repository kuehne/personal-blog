import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ListEntriesComponent } from '../../components/list-entries/list-entries.component';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { BlogEntry } from '../../model/blog-entry';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    ListEntriesComponent,
    PageHeaderComponent,
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
})
export class AdminPageComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  protected entries: BlogEntry[] = [];
  ngOnInit() {
    this.activatedRoute.data.subscribe(({ entries }) => {
      this.entries = entries;
    });
  }
}
