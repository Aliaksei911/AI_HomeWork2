import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { UserTable } from './UserTable';
import { User } from '../../types';

const users: User[] = [
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
];

test('renders user table and handles click', () => {
  const onUserClick = jest.fn();
  const onDelete = jest.fn();
  render(<UserTable users={users} onUserClick={onUserClick} onDelete={onDelete} />);

  expect(screen.getByText('John Doe')).toBeInTheDocument();
  fireEvent.click(screen.getByText('John Doe'));
  expect(onUserClick).toHaveBeenCalledWith(users[0]);

  fireEvent.click(screen.getByTitle('Delete user'));
  expect(onDelete).toHaveBeenCalledWith(1);
}); 