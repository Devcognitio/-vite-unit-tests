import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ShoppingCart } from './shoppinCart';

describe('ShoppingCart', () => {
  it('renders headline', () => {
    render(<ShoppingCart  />);

    screen.debug();

    expect(1).toBe(1);
  });
});