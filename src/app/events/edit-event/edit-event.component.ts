import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-event',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent {
  event: any = {};

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
    const id = this.route.snapshot.params['id'];
    this.loadEvent(id);
  }

  // ngOnInit(): void {
  //   const id = this.route.snapshot.params['id'];
  //   this.loadEvent(id);
  // }

  loadEvent(id: number) {
    this.http.get(`http://localhost:8080/api/events/${id}`)
      .subscribe((data: any) => this.event = data);
  }

  onSubmit() {
    this.http.put(`http://localhost:8080/api/events/${this.event.id}`, this.event)
      .subscribe(() => {
        alert('Event updated successfully!');
        this.router.navigate(['/events']);
      });
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}