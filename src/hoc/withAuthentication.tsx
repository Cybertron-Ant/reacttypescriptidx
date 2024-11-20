import React, { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Interface for the authentication props that will be injected into wrapped components
 */
export interface WithAuthenticationProps {
  isAuthenticated: boolean;
  userRole: string;
  userName: string;
}

/**
 * Higher Order Component for handling authentication and authorization
 * @param WrappedComponent - The component to be wrapped with authentication logic
 * @param requiredRole - Optional role required to access the component
 * @returns A new component with authentication and authorization checks
 */
export const withAuthentication = <P extends object>(
  WrappedComponent: ComponentType<P & WithAuthenticationProps>,
  requiredRole?: string
) => {
  return (props: Omit<P, keyof WithAuthenticationProps>) => {
    const { isAuthenticated, userRole } = useAuth();

    // If user is not authenticated, redirect to login
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    // If a specific role is required and user doesn't have it, redirect to unauthorized page
    if (requiredRole && userRole !== requiredRole) {
      return <Navigate to="/unauthorized" replace />;
    }

    // Inject authentication props into the wrapped component
    return (
      <WrappedComponent
        {...(props as P)}
        isAuthenticated={isAuthenticated}
        userRole={userRole}
        userName="John Doe" // For demo purposes
      />
    );
  };
};
