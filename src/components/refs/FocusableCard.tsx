import React, { forwardRef, ForwardedRef } from 'react';

/**
 * Interface defining the props for the FocusableCard component
 * @interface FocusableCardProps
 * @property {React.ReactNode} children - Child elements to be rendered inside the card
 * @property {string} [className] - Optional CSS classes for styling
 */
interface FocusableCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A focusable card component that can be controlled via refs
 * Useful for creating interactive card elements that need programmatic focus control
 * 
 * @component
 * @example
 * ```tsx
 * const cardRef = useRef<HTMLDivElement>(null);
 * <FocusableCard ref={cardRef}>
 *   <h2>Card Title</h2>
 *   <p>Card content</p>
 * </FocusableCard>
 * ```
 */
const FocusableCard = forwardRef((
  { children, className = '' }: FocusableCardProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div
      ref={ref}
      tabIndex={0}
      className={`p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      role="article"
    >
      {children}
    </div>
  );
});

FocusableCard.displayName = 'FocusableCard';

export default FocusableCard;
