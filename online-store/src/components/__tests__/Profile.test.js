import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import { Profile } from '../Profile';
import { MemoryRouter } from "react-router-dom";

jest.mock('axios'); // Mocking axios module

describe('Profile Component', () => {
  beforeEach(() => {
    // Clear any stored values before each test
    sessionStorage.clear();
    localStorage.clear();
  });

  test('renders profile information correctly', async () => {
    const accountData = {
      first_name: 'John',
      last_name: 'Doe',
      login: 'johndoe',
      address: '123 Main St',
      phone: '1234567890',
      email: 'johndoe@example.com',
    };

    axios.get.mockResolvedValueOnce({ data: accountData });

    const { getByText } = render(
    <MemoryRouter>
        <Profile />
    </MemoryRouter>
    );

    expect(getByText('Profile')).toBeInTheDocument();
    expect(getByText('First Name:')).toBeInTheDocument();
    expect(getByText('Last Name:')).toBeInTheDocument();
    expect(getByText('Login:')).toBeInTheDocument();
    expect(getByText('Address:')).toBeInTheDocument();
    expect(getByText('Phone:')).toBeInTheDocument();
    expect(getByText('Email:')).toBeInTheDocument();

    // expect(screen.getByText(accountData.first_name)).toBeInTheDocument();
    // expect(screen.getByText(accountData.last_name)).toBeInTheDocument();
    // expect(screen.getByText(accountData.login)).toBeInTheDocument();
    // expect(screen.getByText(accountData.address)).toBeInTheDocument();
    // expect(screen.getByText(accountData.phone)).toBeInTheDocument();
    // expect(screen.getByText(accountData.email)).toBeInTheDocument();
  });

  test('handles logout correctly', () => {
    const { container } = render(
        <MemoryRouter>
            <Profile />
        </MemoryRouter>
        );
    const logoutButton = screen.getByText('Logout');

    fireEvent.click(logoutButton);

    expect(sessionStorage.getItem('Authorization')).toBeNull();
    expect(localStorage.getItem('Authorization')).toBeNull();
    expect(localStorage.getItem('Token')).toBeNull();
    expect(localStorage.getItem('ShoppingCartItems')).toBeNull();
    expect(localStorage.getItem('cartGoods')).toBeNull();
    // expect(container.innerHTML).not.toContain('Profile'); // Assuming the component gets unmounted on logout
  });

  test('handles user deletion correctly', async () => {
    axios.delete.mockResolvedValueOnce({});

    const { getByText, findByText } = render(
        <MemoryRouter>
            <Profile />
        </MemoryRouter>
        );
    const deleteUserButton = getByText('Delete User');

    fireEvent.click(deleteUserButton);

    
    expect(await findByText('Your account was successfully deleted')).toBeInTheDocument();
    expect(sessionStorage.getItem('Authorization')).toBeNull();
    expect(localStorage.getItem('Authorization')).toBeNull();
    expect(localStorage.getItem('Token')).toBeNull();
    expect(localStorage.getItem('ShoppingCartItems')).toBeNull();
    expect(localStorage.getItem('cartGoods')).toBeNull();
    expect(container.innerHTML).not.toContain('Profile'); // Assuming the component gets unmounted after deletion
  });
});
