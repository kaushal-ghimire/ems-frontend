import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  bookings: any[] = []; // ✅ define the property so template can use it

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings() {
    this.http.get<any[]>('http://localhost:8080/api/bookings')
      .subscribe({
        next: (data) => (this.bookings = data),
        error: (err) => console.error('Error loading bookings', err)
      });
  }

  delete(id: number) {
    if (confirm('Are you sure you want to delete this booking?')) {
      this.http.delete(`http://localhost:8080/api/bookings/${id}`)
        .subscribe(() => {
          alert('Booking deleted successfully.');
          this.loadBookings();
        });
    }
  }
}
