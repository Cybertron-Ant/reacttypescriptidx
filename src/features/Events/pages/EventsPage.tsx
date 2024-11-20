import React, { useState } from 'react';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm';
import { Event } from '../../../types/Event';

/**
 * Main Events page component that manages the events feature
 */
const EventsPage: React.FC = () => {
  const [isCreating, setIsCreating] = useState(false);

  /**
   * Handles the creation of a new event
   */
  const handleCreateEvent = (eventData: Omit<Event, 'id'>) => {
    // TODO: Implement event creation logic
    setIsCreating(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">HR Events Management</h1>
        <button
          onClick={() => setIsCreating(true)}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Create New Event
        </button>
      </div>

      {isCreating ? (
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Create New Event</h2>
            <button
              onClick={() => setIsCreating(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <EventForm onSubmit={handleCreateEvent} />
        </div>
      ) : null}

      <EventList />
    </div>
  );
};

export default EventsPage;
