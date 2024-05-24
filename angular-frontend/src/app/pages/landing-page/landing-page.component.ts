import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListTeasersComponent } from '@app/components/list-teasers/list-teasers.component';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { BlogEntry } from '@app/model/blog-entry';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ListTeasersComponent, PageHeaderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  protected entries: BlogEntry[] = [];
  ngOnInit() {
    this.activatedRoute.data.subscribe(({ entries }) => {
      this.entries = entries;
    });
  }
}
