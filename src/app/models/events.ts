export interface Event {
    id?: number;
    title: string;
    description?: string;
    location?: string;
    eventDate: string; // ISO string
    capacity?: number;
}