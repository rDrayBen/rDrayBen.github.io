import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import { Profile } from './Profile';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
// import { waitFor } from "@testing-library/react-native";

jest.mock('axios'); // Mocking axios module
// jest.mock('@testing-library/react-native'); 

describe('Profile Component', () => {
//   beforeEach(() => {
//     // Clear any stored values before each test
//     sessionStorage.clear();
//     localStorage.clear();
//   });

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

    render(<BrowserRouter>
        <Routes>
          <Route element={<Profile />} />
        </Routes>
      </BrowserRouter>);
    waitFor(() => expect(screen.queryByTestId('profileH1')).toBeInTheDocument());
    // expect(head).toBeInTheDocument()
    expect(await screen.getByText('First Name:')).toBeInTheDocument();
    expect(screen.getByText('Last Name:')).toBeInTheDocument();
    expect(screen.getByText('Login:')).toBeInTheDocument();
    expect(screen.getByText('Address:')).toBeInTheDocument();
    expect(screen.getByText('Phone:')).toBeInTheDocument();
    expect(screen.getByText('Email:')).toBeInTheDocument();

    // expect(screen.getByText(accountData.first_name)).toBeInTheDocument();
    // expect(screen.getByText(accountData.last_name)).toBeInTheDocument();
    // expect(screen.getByText(accountData.login)).toBeInTheDocument();
    // expect(screen.getByText(accountData.address)).toBeInTheDocument();
    // expect(screen.getByText(accountData.phone)).toBeInTheDocument();
    // expect(screen.getByText(accountData.email)).toBeInTheDocument();
  });

  test('handles logout correctly', () => {
    const { container } = render(<BrowserRouter>
        <Routes>
          <Route element={<Profile />} />
        </Routes>
      </BrowserRouter>);
    const logoutButton = screen.queryByTestId('LOGOUT');

    fireEvent.click(logoutButton);

    expect(sessionStorage.getItem('Authorization')).toBeNull();
    expect(localStorage.getItem('Authorization')).toBeNull();
    expect(localStorage.getItem('Token')).toBeNull();
    expect(localStorage.getItem('ShoppingCartItems')).toBeNull();
    expect(localStorage.getItem('cartGoods')).toBeNull();
    expect(container.innerHTML).not.toContain('Profile'); // Assuming the component gets unmounted on logout
  });

//   test('handles user deletion correctly', async () => {
//     axios.delete.mockResolvedValueOnce({});

//     const { container } = render(
//     <BrowserRouter>
//         <Routes>
//           <Route path='/profile' element={<Profile />} />
//         </Routes>
//       </BrowserRouter>);
//     const deleteUserButton = screen.getByText('Delete User');

//     fireEvent.click(deleteUserButton);

//     expect(await screen.findByText('Your account was successfully deleted')).toBeInTheDocument();
//     expect(sessionStorage.getItem('Authorization')).toBeNull();
//     expect(localStorage.getItem('Authorization')).toBeNull();
//     expect(localStorage.getItem('Token')).toBeNull();
//     expect(localStorage.getItem('ShoppingCartItems')).toBeNull();
//     expect(localStorage.getItem('cartGoods')).toBeNull();
//     expect(container.innerHTML).not.toContain('Profile'); // Assuming the component gets unmounted after deletion
//   });
});
