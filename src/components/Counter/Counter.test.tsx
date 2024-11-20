import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

/**
 * Test suite for the Counter component
 * 
 * This suite covers:
 * - Initial rendering with default and custom props
 * - User interactions (increment, decrement, reset)
 * - Component behavior with different prop combinations
 */
describe('Counter Component', () => {
  // Test default rendering
  describe('Default Rendering', () => {
    it('should render with default props', () => {
      render(<Counter />);
      
      // Verify the default label is present
      expect(screen.getByText('Counter')).toBeInTheDocument();
      
      // Verify the initial count value is displayed
      expect(screen.getByTestId('counter-display')).toHaveTextContent('0');
      
      // Verify all buttons are present
      expect(screen.getByTestId('increment-button')).toBeInTheDocument();
      expect(screen.getByTestId('decrement-button')).toBeInTheDocument();
      expect(screen.getByTestId('reset-button')).toBeInTheDocument();
    });

    it('should render with custom props', () => {
      const customProps = {
        initialValue: 10,
        step: 5,
        label: 'Custom Counter'
      };
      
      render(<Counter {...customProps} />);
      
      // Verify custom label is displayed
      expect(screen.getByText('Custom Counter')).toBeInTheDocument();
      
      // Verify custom initial value is displayed
      expect(screen.getByTestId('counter-display')).toHaveTextContent('10');
    });
  });

  // Test user interactions
  describe('User Interactions', () => {
    it('should increment count when increment button is clicked', () => {
      render(<Counter initialValue={0} step={2} />);
      
      const incrementButton = screen.getByTestId('increment-button');
      fireEvent.click(incrementButton);
      
      // Verify count increased by step value
      expect(screen.getByTestId('counter-display')).toHaveTextContent('2');
    });

    it('should decrement count when decrement button is clicked', () => {
      render(<Counter initialValue={10} step={5} />);
      
      const decrementButton = screen.getByTestId('decrement-button');
      fireEvent.click(decrementButton);
      
      // Verify count decreased by step value
      expect(screen.getByTestId('counter-display')).toHaveTextContent('5');
    });

    it('should reset count to initial value when reset button is clicked', () => {
      render(<Counter initialValue={10} />);
      
      // First, increment the counter
      const incrementButton = screen.getByTestId('increment-button');
      fireEvent.click(incrementButton);
      
      // Verify increment worked
      expect(screen.getByTestId('counter-display')).toHaveTextContent('11');
      
      // Now reset
      const resetButton = screen.getByTestId('reset-button');
      fireEvent.click(resetButton);
      
      // Verify count reset to initial value
      expect(screen.getByTestId('counter-display')).toHaveTextContent('10');
    });
  });

  // Test multiple interactions
  describe('Multiple Interactions', () => {
    it('should handle multiple increments correctly', () => {
      render(<Counter initialValue={0} step={1} />);
      
      const incrementButton = screen.getByTestId('increment-button');
      
      // Click increment button multiple times
      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);
      
      // Verify final count
      expect(screen.getByTestId('counter-display')).toHaveTextContent('3');
    });

    it('should handle mixed operations correctly', () => {
      render(<Counter initialValue={5} step={1} />);
      
      const incrementButton = screen.getByTestId('increment-button');
      const decrementButton = screen.getByTestId('decrement-button');
      
      // Perform mixed operations
      fireEvent.click(incrementButton); // 6
      fireEvent.click(incrementButton); // 7
      fireEvent.click(decrementButton); // 6
      fireEvent.click(decrementButton); // 5
      
      // Verify final count
      expect(screen.getByTestId('counter-display')).toHaveTextContent('5');
    });
  });

  // Test edge cases
  describe('Edge Cases', () => {
    it('should handle negative numbers correctly', () => {
      render(<Counter initialValue={0} step={1} />);
      
      const decrementButton = screen.getByTestId('decrement-button');
      
      // Decrement below zero
      fireEvent.click(decrementButton);
      
      // Verify negative number is displayed correctly
      expect(screen.getByTestId('counter-display')).toHaveTextContent('-1');
    });

    it('should handle large step values correctly', () => {
      render(<Counter initialValue={0} step={1000} />);
      
      const incrementButton = screen.getByTestId('increment-button');
      fireEvent.click(incrementButton);
      
      // Verify large number is handled correctly
      expect(screen.getByTestId('counter-display')).toHaveTextContent('1000');
    });
  });
});
