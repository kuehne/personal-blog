import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BlogEntry } from '../../model/blog-entry';

@Component({
  selector: 'app-edit-entry',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './edit-entry.component.html',
  styleUrl: './edit-entry.component.scss',
})
export class EditEntryComponent implements OnInit {
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(this.entry?.title),
      teaser: new FormControl(this.entry?.teaser),
      content: new FormControl(this.entry?.content),
    });
  }
  @Input({ required: true })
  public entry!: BlogEntry;
  protected form!: FormGroup;

  onSubmit() {
    this.formSubmitted.emit(this.form.value);
  }
  @Output()
  formSubmitted = new EventEmitter<BlogEntry>();
}
