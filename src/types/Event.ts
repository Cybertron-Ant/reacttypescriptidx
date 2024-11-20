/**
 * Represents an HR event in the system
 */
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: EventType;
  attendees: string[];
  organizer: string;
  status: EventStatus;
}

/**
 * Different types of HR events
 */
export enum EventType {
  TRAINING = 'TRAINING',
  MEETING = 'MEETING',
  TEAM_BUILDING = 'TEAM_BUILDING',
  INTERVIEW = 'INTERVIEW',
  PERFORMANCE_REVIEW = 'PERFORMANCE_REVIEW',
  OTHER = 'OTHER'
}

/**
 * Possible statuses for an event
 */
export enum EventStatus {
  SCHEDULED = 'SCHEDULED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}
