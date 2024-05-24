import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisplayEntryComponent } from '@app/components/display-entry/display-entry.component';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { BlogEntry } from '@app/model/blog-entry';

@Component({
  selector: 'app-display-entry-page',
  standalone: true,
  imports: [CommonModule, DisplayEntryComponent, PageHeaderComponent],
  templateUrl: './display-entry-page.component.html',
  styleUrl: './display-entry-page.component.scss',
})
export class DisplayEntryPageComponent implements OnInit {
  constructor(private readonly activatedRoute: ActivatedRoute) {}
  protected entry: BlogEntry | null = null;
  ngOnInit() {
    this.activatedRoute.data.subscribe(({ entry }) => {
      this.entry = entry;
    });
  }
}
