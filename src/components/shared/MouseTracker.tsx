import React, { useState, useEffect } from 'react';

/**
 * Interface defining the mouse position coordinates
 */
interface MousePosition {
  x: number;
  y: number;
}

/**
 * Props interface for the MouseTracker component
 * @template T - Generic type parameter for additional data that can be passed to the render prop
 */
interface MouseTrackerProps<T = {}> {
  /**
   * Render prop function that receives mouse position and optional additional data
   * Returns a React node to be rendered
   */
  children: (position: MousePosition & T) => React.ReactNode;
  /**
   * Optional additional data to be passed to the render function
   */
  additionalData?: T;
}

/**
 * MouseTracker Component - A render props pattern implementation
 * Tracks mouse position and provides it to child components through a render prop
 * 
 * @example
 * ```tsx
 * <MouseTracker>
 *   {({ x, y }) => (
 *     <div>Mouse position: {x}, {y}</div>
 *   )}
 * </MouseTracker>
 * ```
 */
const MouseTracker = <T extends object>({ 
  children, 
  additionalData 
}: MouseTrackerProps<T>): JSX.Element => {
  // State to store mouse position
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  // Effect to handle mouse move events
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array as we don't need to re-run this effect

  // Combine mouse position with additional data if provided
  const renderData = {
    ...mousePosition,
    ...(additionalData || {})
  };

  // Render the children function with the current position
  return <>{children(renderData as MousePosition & T)}</>;
};

export default MouseTracker;
