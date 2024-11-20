import React, { useState, useEffect } from 'react';
import { Event, EventType, EventStatus } from '../../../types/Event';

/**
 * Component for displaying a list of events
 */
const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch events from API
    setLoading(false);
  }, []);

  /**
   * Renders the event status with appropriate styling
   */
  const renderStatus = (status: EventStatus) => {
    const statusStyles = {
      [EventStatus.SCHEDULED]: 'bg-blue-100 text-blue-800',
      [EventStatus.IN_PROGRESS]: 'bg-yellow-100 text-yellow-800',
      [EventStatus.COMPLETED]: 'bg-green-100 text-green-800',
      [EventStatus.CANCELLED]: 'bg-red-100 text-red-800',
    };

    return (
      <span className={`px-2 py-1 rounded-full text-sm ${statusStyles[status]}`}>
        {status}
      </span>
    );
  };

  if (loading) {
    return <div className="flex justify-center items-center">Loading events...</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">HR Events</h2>
      {events.length === 0 ? (
        <p className="text-gray-500">No events found</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                {renderStatus(event.status)}
              </div>
              <p className="text-gray-600 mb-2">{event.description}</p>
              <div className="text-sm text-gray-500">
                <p>📅 {event.date} at {event.time}</p>
                <p>📍 {event.location}</p>
                <p>👥 {event.attendees.length} attendees</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
