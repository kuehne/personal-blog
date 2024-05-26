import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { DateLineComponent } from '@app/components/date-line/date-line.component';
import { BlogEntry } from '@app/model/blog-entry';

@Component({
  selector: 'app-display-entry',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    DateLineComponent,
  ],
  templateUrl: './display-entry.component.html',
  styleUrl: './display-entry.component.scss',
})
export class DisplayEntryComponent {
  @Input({ required: true })
  public entry!: BlogEntry;
}
