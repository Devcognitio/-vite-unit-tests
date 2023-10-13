import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

// Describe the component you're testing
describe('Counter Component', () => {
  // Test 1: Renders the Counter component
  it('renders the Counter component', () => {
    const { getByText } = render(<Counter />);
    const counterElement = getByText('Count:');
    expect(counterElement).toBeInTheDocument();
  });

  // Test 2: Clicking the increment button updates the count
  it('increments the count when the button is clicked', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText('Increment');
    const countElement = getByText('Count: 0');

    fireEvent.click(incrementButton); // Simulate a button click

    expect(countElement).toHaveTextContent('Count: 1');
  });
});
