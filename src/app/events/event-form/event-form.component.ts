import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  standalone: true,
  // imports: [CommonModule, RouterModule, FormsModule],
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})

export class EventFormComponent {

  // backend API URL
  private apiUrl = 'http://localhost:8080/api/events';
  eventForm!: FormGroup;  // <-- declare but don't initialize yet

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router
  ) {
    // ✅ initialize the form inside constructor (after fb is available)
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      eventDate: ['', Validators.required],
      capacity: [null, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      const eventData = this.eventForm.value;
      this.http.post(this.apiUrl, eventData).subscribe({
        next: () => {
          alert('✅ Event added successfully!');
          this.router.navigate(['/events']);
        },
        error: (err) => {
          console.error('Error saving event:', err);
          alert('❌ Failed to add event. Check console for details.');
        }
      });
    } else {
      alert('⚠️ Please fill all required fields.');
    }
  }
}
