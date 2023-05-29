import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import { Login } from '../Login';

jest.mock('axios');

describe('Login', () => {
  beforeEach(() => {
    // Clear session storage before each test
    sessionStorage.clear();
  });

  // it('renders login form', () => {
  //   constrender(<Login />, { wrapper: MemoryRouter });
  //   const loginFormElement = screen.getByTestId('login-form');
  //   expect(loginFormElement).toBeInTheDocument();
  // });

  // it('submits login form with valid credentials', async () => {
  //   const mockResponse = {
  //     data: {
  //       token: 'mock-token',
  //     },
  //   };
  //   axios.get.mockResolvedValueOnce(mockResponse);

  //   render(<Login />, { wrapper: MemoryRouter });

  //   // Fill in the login and password fields
  //   fireEvent.change(screen.getByLabelText(/Login/i), { target: { value: 'testuser' } });
  //   fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'testpassword' } });

  //   // Submit the form
  //   fireEvent.click(screen.getByTestId('login-button'));

  //   // Wait for the form submission to complete
  //   await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

  //   // Check if the authorization and token values are stored in session storage
  //   expect(sessionStorage.getItem('Authorization')).toBe('Basic dGVzdHVzZXI6dGVzdHBhc3N3b3Jk');
  //   expect(sessionStorage.getItem('Token')).toBe('mock-token');

  //   // Check if the navigation to the main page is triggered
  //   expect(screen.getByTestId('main-page')).toBeInTheDocument();
  // });

  // it('displays an error for invalid credentials', async () => {
  //   const mockErrorResponse = {
  //     response: {
  //       data: 'Invalid credentials',
  //     },
  //   };
  //   axios.get.mockRejectedValueOnce(mockErrorResponse);

  //   render(<Login />, { wrapper: MemoryRouter });

  //   // Fill in the login and password fields
  //   fireEvent.change(screen.getByLabelText(/Login/i), { target: { value: 'invaliduser' } });
  //   fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'invalidpassword' } });

  //   // Submit the form
  //   fireEvent.click(screen.getByTestId('login-button'));

  //   // Wait for the form submission to complete
  //   await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

  //   // Check if the error message is displayed
  //   expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
  // });
});
