import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-line.component.html',
  styleUrl: './date-line.component.scss',
})
export class DateLineComponent {
  @Input({ required: true })
  public date!: Date;
}
