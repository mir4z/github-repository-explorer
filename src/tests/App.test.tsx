import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('render App component', () => {
    // when
    render(<App />);

    // then
    expect(screen.getByText('Hello World')).not.toBeUndefined();
  });
});
