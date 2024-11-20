import { Event, EventType, EventStatus } from '../types/Event';

/**
 * Service class for handling Event-related operations
 */
class EventService {
  private events: Event[] = [];

  /**
   * Creates a new event
   * @param event The event to create
   * @returns The created event with generated ID
   */
  async createEvent(event: Omit<Event, 'id'>): Promise<Event> {
    const newEvent: Event = {
      ...event,
      id: Math.random().toString(36).substr(2, 9)
    };
    this.events.push(newEvent);
    return newEvent;
  }

  /**
   * Retrieves all events
   * @returns Array of all events
   */
  async getAllEvents(): Promise<Event[]> {
    return this.events;
  }

  /**
   * Retrieves a specific event by ID
   * @param id The event ID
   * @returns The event if found, null otherwise
   */
  async getEventById(id: string): Promise<Event | null> {
    return this.events.find(event => event.id === id) || null;
  }

  /**
   * Updates an existing event
   * @param id The event ID
   * @param updates The updates to apply
   * @returns The updated event if found, null otherwise
   */
  async updateEvent(id: string, updates: Partial<Event>): Promise<Event | null> {
    const index = this.events.findIndex(event => event.id === id);
    if (index === -1) return null;

    this.events[index] = { ...this.events[index], ...updates };
    return this.events[index];
  }

  /**
   * Deletes an event
   * @param id The event ID
   * @returns True if deleted, false if not found
   */
  async deleteEvent(id: string): Promise<boolean> {
    const index = this.events.findIndex(event => event.id === id);
    if (index === -1) return false;

    this.events.splice(index, 1);
    return true;
  }
}
