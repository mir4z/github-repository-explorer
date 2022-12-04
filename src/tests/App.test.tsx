import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from '../App';
import { renderWithProviders } from './util/test-utils';

describe('App', () => {
  it('render App component', () => {
    // when
    renderWithProviders(<App />);

    // then
    expect(screen.getByRole('button')).toHaveTextContent('Search Users');
  });
});
