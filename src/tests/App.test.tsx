import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { App } from '../App';

describe('App', () => {
  const queryClient = new QueryClient();

  const customRender = (ui: ReactNode) =>
    render(
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    );

  it('render App component', () => {
    // when
    customRender(<App />);

    // then
    expect(screen.getByRole('button')).toHaveTextContent('Search Users');
  });
});
