import { Routes } from '@angular/router';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventFormComponent } from './events/event-form/event-form.component';
import { BookingListComponent } from './bookings/booking-list/booking-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: 'events', component: EventListComponent },
    { path: 'events/new', component: EventFormComponent },
    { path: 'events/:id', component: EventFormComponent },
    { path: 'bookings', component: BookingListComponent },
];

// import { Routes } from '@angular/router';
// import { EventListComponent } from './events/event-list/event-list.component';
// import { EventFormComponent } from './events/event-form/event-form.component';

// export const routes: Routes = [
//     { path: '', redirectTo: 'events', pathMatch: 'full' },
//     { path: 'events', component: EventListComponent },
//     { path: 'events/new', component: EventFormComponent },
//     { path: 'events/:id', component: EventFormComponent },
// ];