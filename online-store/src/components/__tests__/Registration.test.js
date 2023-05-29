import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import { Registration } from '../Registration';
import { MemoryRouter } from 'react-router-dom';

jest.mock('axios');
jest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
  useNavigate: jest.fn(),
}));

describe('Registration Component', () => {
  test('submits the form with user input and redirects on successful registration', async () => {
    axios.post.mockResolvedValueOnce({
      data: {
        id: 1,
      },
    });
    const mockNavigate = jest.fn();
    const { getByLabelText, getByRole } = render(<MemoryRouter>
        <Registration />
    </MemoryRouter>
    );
    
    
    await waitFor(() => {
      const firstNameInput = getByLabelText('First Name:');
      fireEvent.change(firstNameInput, { target: { value: 'John' } });
      expect(firstNameInput).toHaveValue('John');

      const lastNameInput = getByLabelText('Last Name:');
      fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
      expect(lastNameInput).toHaveValue('Doe');

      const loginInput = getByLabelText('Login:');
      fireEvent.change(loginInput, { target: { value: 'johndoe' } });
      expect(loginInput).toHaveValue('johndoe');

      const addressInput = getByLabelText('Address:');
      fireEvent.change(addressInput, { target: { value: '123 Main St' } });
      expect(addressInput).toHaveValue('123 Main St');

      const phoneInput = getByLabelText('Phone:');
      fireEvent.change(phoneInput, { target: { value: '1234567890' } });
      expect(phoneInput).toHaveValue('1234567890');

      const emailInput = getByLabelText('Email:');
      fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
      expect(emailInput).toHaveValue('john.doe@example.com');

      const passwordInput = getByLabelText('Password:');
      fireEvent.change(passwordInput, { target: { value: 'password' } });
      expect(passwordInput).toHaveValue('password');

      const submitButton = getByRole('button', { name: 'Register' });
      fireEvent.click(submitButton);

      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        'http://127.0.0.1:5000/user',
        {
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@example.com',
          login: 'johndoe',
          password: 'password',
          address: '123 Main St',
          phone: '1234567890',
        },
        expect.any(Object)
      );

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith('/main');
    });
  });

  test('displays an error message on registration failure', async () => {
    axios.post.mockRejectedValueOnce({
      response: {
        data: 'Registration failed',
      },
    });
    const { getByRole } = render(<MemoryRouter>
        <Registration />
    </MemoryRouter>
    );
    
    await waitFor(() => {
      const submitButton = getByRole('button', { name: 'Register' });
      fireEvent.click(submitButton);

      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(screen.getByText('Registration failed')).toBeInTheDocument();
    });
  });
});
