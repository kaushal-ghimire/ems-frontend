import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/events';

@Injectable({ providedIn: 'root' })
export class EventService {
    private base = 'http://localhost:8080/api/events';
    constructor(private http: HttpClient) { }
    list(): Observable<Event[]> { return this.http.get<Event[]>(this.base); }
    get(id: number) { return this.http.get<Event>(`${this.base}/${id}`); }
    create(e: Event) { return this.http.post<Event>(this.base, e); }
    update(id: number, e: Event) { return this.http.put<Event>(`${this.base}/${id}`, e); }
    delete(id: number) { return this.http.delete(`${this.base}/${id}`); }
}