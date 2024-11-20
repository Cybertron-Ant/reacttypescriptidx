import React, { ComponentType } from 'react';
import { useAuth } from '../context/AuthContext';

/**
 * Interface for the permission props that will be injected into wrapped components
 */
export interface WithPermissionsProps {
  canView: boolean;
  canEdit: boolean;
  canDelete: boolean;
  canCreate: boolean;
}

/**
 * Type defining the structure of permission requirements
 */
type PermissionRequirements = {
  view?: boolean;
  edit?: boolean;
  delete?: boolean;
  create?: boolean;
};

/**
 * Higher Order Component for handling feature-level permissions
 * @param WrappedComponent - The component to be wrapped with permission logic
 * @param requiredPermissions - Object specifying which permissions are required
 * @returns A new component with permission checking capabilities
 */
export const withPermissions = <P extends object>(
  WrappedComponent: ComponentType<P & WithPermissionsProps>,
  requiredPermissions: PermissionRequirements = {}
) => {
  return (props: Omit<P, keyof WithPermissionsProps>) => {
    const { isAuthenticated, userRole } = useAuth();

    // For demo purposes, if user is authenticated as HR_ADMIN, grant all permissions
    const userPermissions = {
      canView: isAuthenticated && userRole === 'HR_ADMIN',
      canEdit: isAuthenticated && userRole === 'HR_ADMIN',
      canDelete: isAuthenticated && userRole === 'HR_ADMIN',
      canCreate: isAuthenticated && userRole === 'HR_ADMIN',
    };

    // If user is not authenticated or doesn't have the HR_ADMIN role, don't check permissions
    if (!isAuthenticated || userRole !== 'HR_ADMIN') {
      return (
        <WrappedComponent
          {...(props as P)}
          {...userPermissions}
        />
      );
    }

    // Check if user has all required permissions
    const hasRequiredPermissions = Object.entries(requiredPermissions).every(
      ([permission, required]) => {
        if (!required) return true;
        const permissionKey = `can${permission.charAt(0).toUpperCase() + permission.slice(1)}` as keyof typeof userPermissions;
        return userPermissions[permissionKey];
      }
    );

    // If user doesn't have required permissions, render nothing or an unauthorized message
    if (!hasRequiredPermissions) {
      return <div>You don't have the required permissions to access this feature.</div>;
    }

    // Inject permission props into the wrapped component
    return (
      <WrappedComponent
        {...(props as P)}
        {...userPermissions}
      />
    );
  };
};
