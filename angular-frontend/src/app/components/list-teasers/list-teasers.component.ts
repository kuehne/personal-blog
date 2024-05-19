import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import { BlogEntry } from '../../model/blog-entry';

@Component({
  selector: 'app-list-teasers',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule,
    RouterLink,
    MatIconModule,
  ],
  templateUrl: './list-teasers.component.html',
  styleUrl: './list-teasers.component.scss',
})
export class ListTeasersComponent {
  @Input({ required: true })
  public entries!: BlogEntry[];
}
