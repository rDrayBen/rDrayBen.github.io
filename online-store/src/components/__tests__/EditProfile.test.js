import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import { EditProfile } from '../EditProfile';
import { MemoryRouter } from "react-router-dom";

jest.mock('axios');
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('EditProfile Component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValueOnce({
      data: {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        phone: '123456789',
        address: '123 Main St',
      },
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('renders form fields with initial values', async () => {
    const {getByLabelText} = render(

            <EditProfile />

    );
    
    await waitFor(() => {
      expect(getByLabelText('First Name')).toHaveValue('John');
      expect(getByLabelText('Last Name')).toHaveValue('Doe');
      expect(getByLabelText('Email')).toHaveValue('john.doe@example.com');
      expect(getByLabelText('Phone')).toHaveValue('123456789');
      expect(getByLabelText('Address')).toHaveValue('123 Main St');
    });
  });

  test('updates form fields when user inputs values', async () => {
    const {getByLabelText} = render(

            <EditProfile />

    );
    
    await waitFor(() => {
      const firstNameInput = getByLabelText('First Name');
      fireEvent.change(firstNameInput, { target: { value: 'Jane' } });
      expect(firstNameInput).toHaveValue('Jane');

      const lastNameInput = getByLabelText('Last Name');
      fireEvent.change(lastNameInput, { target: { value: 'Smith' } });
      expect(lastNameInput).toHaveValue('Smith');

      const phoneInput = getByLabelText('Email');
      fireEvent.change(phoneInput, { target: { value: '0504564198' } });
      expect(phoneInput).toHaveValue('Smith');
      
      const passwordInput = getByLabelText('Email');
      fireEvent.change(passwordInput, { target: { value: '111111' } });
      expect(passwordInput).toHaveValue('Smith');
      
      const confirmPasswordInput = getByLabelText('Email');
      fireEvent.change(confirmPasswordInput, { target: { value: '111111' } });
      expect(confirmPasswordInput).toHaveValue('Smith');
      
      const addressInput = getByLabelText('Email');
      fireEvent.change(addressInput, { target: { value: 'ejfejgbsdjg' } });
      expect(addressInput).toHaveValue('Smith');
      
      const emailInput = getByLabelText('Email');
      fireEvent.change(emailInput, { target: { value: 'user10@gmail.com' } });
      expect(emailInput).toHaveValue('Smith');
    });
  });

  test('calls the API to update user profile when form is submitted', async () => {
    axios.put.mockResolvedValueOnce({});
    const {getByRole} = render(

            <EditProfile />

    );
    
    await waitFor(() => {
      const submitButton = getByRole('button', { name: 'Save Changes' });
      fireEvent.click(submitButton);

      expect(axios.put).toHaveBeenCalledTimes(1);
      expect(axios.put).toHaveBeenCalledWith(
        'http://127.0.0.1:5000/user/self',
        expect.objectContaining({
          first_name: 'John', // Updated value
          last_name: 'Doe', // Unchanged value
          // ... other fields
        }),
        expect.any(Object)
      );
    });
  });
});
