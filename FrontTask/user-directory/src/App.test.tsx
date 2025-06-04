import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

// Мокаем fetch
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([
        {
          id: 1,
          name: 'John Doe',
          username: 'johndoe',
          email: 'john@example.com',
          address: {
            street: 'Main',
            suite: 'Apt. 1',
            city: 'Metropolis',
            zipcode: '12345',
            geo: { lat: '0', lng: '0' },
          },
          phone: '123-456',
          website: 'example.com',
          company: { name: 'Acme', catchPhrase: 'We build', bs: 'business' },
        },
      ]),
    }) as any
  );
});

afterAll(() => {
  (global.fetch as jest.Mock).mockRestore();
});

test('integration: open modal and delete user', async () => {
  render(<App />);
  await waitFor(() => expect(screen.getByText('John Doe')).toBeInTheDocument());

  fireEvent.click(screen.getByText('John Doe'));
  expect(screen.getByText('Metropolis, Main, Apt. 1, 12345')).toBeInTheDocument();

  fireEvent.click(screen.getByTitle('Закрыть'));
  expect(screen.queryByText('Metropolis, Main, Apt. 1, 12345')).not.toBeInTheDocument();

  fireEvent.click(screen.getByTitle('Delete user'));
  expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
});
