import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { UserModal } from './UserModal';
import { User } from '../../types';

const user: User = {
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
};

test('renders user modal and closes', () => {
  const onClose = jest.fn();
  render(<UserModal user={user} onClose={onClose} />);

  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('john@example.com')).toBeInTheDocument();
  fireEvent.click(screen.getByTitle('Закрыть'));
  expect(onClose).toHaveBeenCalled();
}); 