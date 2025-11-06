import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {
  events: any[] = [];

  constructor(private http: HttpClient) {
    this.loadEvents();
  }

  // ngOnInit() {
  //   this.http.get<any[]>('http://localhost:8080/api/events')
  //     .subscribe(data => this.events = data);
  // }


  loadEvents() {
    this.http.get<any[]>('http://localhost:8080/api/events')
      .subscribe(data => this.events = data);
  }

  delete(id: number) {
    if (confirm('Are you sure you want to delete this event?')) {
      this.http.delete(`http://localhost:8080/api/events/${id}`)
        .subscribe(() => {
          alert('Event deleted successfully.');
          this.loadEvents();
        });
    }
  }
}


// import { Component, OnInit } from '@angular/core';
// import { EventService } from '../../services/event.service';
// import { Event } from '../../models/events';

// @Component({
//   selector: 'app-event-list',
//   templateUrl: './event-list.component.html'
// })
// export class EventListComponent implements OnInit {
//   events: Event[] = [];
//   loading = false;
//   constructor(private svc: EventService) { }
//   ngOnInit() { this.load(); }
//   load() {
//     this.loading = true;
//     this.svc.list().subscribe(data => { this.events = data; this.loading = false; });
//   }
//   delete(id?: number) {
//     if (!id || !confirm('Delete this event?')) return;
//     this.svc.delete(id).subscribe(() => this.load());
//   }
// }