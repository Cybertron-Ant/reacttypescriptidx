import React, { createContext, useContext, ReactNode } from 'react';
import { HRContextType } from '../types/hr.types';
import { useEmployees } from '../hooks/useEmployees';

/**
 * HR Context for global state management
 * Demonstrates proper context creation and provider pattern
 */
const HRContext = createContext<HRContextType | null>(null);

/**
 * Custom hook to use HR context with type safety
 * Throws an error if used outside of HRProvider
 */
export const useHR = () => {
  const context = useContext(HRContext);
  if (!context) {
    throw new Error('useHR must be used within an HRProvider');
  }
  return context;
};

interface HRProviderProps {
  children: ReactNode;
}

/**
 * HR Provider component that wraps the application
 * Provides HR management functionality to all child components
 */
export const HRProvider: React.FC<HRProviderProps> = ({ children }) => {
  const hrState = useEmployees();

  return (
    <HRContext.Provider value={hrState}>
      {children}
    </HRContext.Provider>
  );
};
