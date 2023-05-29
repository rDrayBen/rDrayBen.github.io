import React from 'react';
import { render, screen } from '@testing-library/react';
import { NavigationBar } from '../NavigationBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { MemoryRouter } from "react-router-dom";

describe('NavigationBar Component', () => {
  test('renders navigation bar correctly for the home page', () => {
    const { getByText } = render(
        <MemoryRouter>
            <NavigationBar />
        </MemoryRouter>
        );

    const logoLink = getByText('Online Store');
    const registrationButton = getByText('Registration');
    const loginButton = getByText('Login');

    expect(logoLink).toBeInTheDocument();
    expect(registrationButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test('renders navigation bar correctly for the login page', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/login']}>
      <NavigationBar />
    </MemoryRouter>
    );

    const logoLink = getByText('Online Store');

    expect(logoLink).toBeInTheDocument();
  });

  test('renders navigation bar correctly for the registration page', () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/registration']}>
        <NavigationBar />
      </MemoryRouter>
      );

    const logoLink = getByText('Online Store');

    expect(logoLink).toBeInTheDocument();
  });

  test('renders navigation bar correctly for the edit profile page', () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/edit_profile']}>
        <NavigationBar />
      </MemoryRouter>
      );

    const logoLink = getByText('Online Store');
    const backToProfileLink = getByText('Back to profile');

    expect(logoLink).toBeInTheDocument();
    expect(backToProfileLink).toBeInTheDocument();
  });

  test('renders navigation bar correctly for the shopping cart page', () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/shopping_cart']}>
        <NavigationBar />
      </MemoryRouter>
      );

    const logoLink = getByText('Online store');
    const myOrdersLink = getByText('My Orders');
    const profileLink = getByText('Profile');

    expect(logoLink).toBeInTheDocument();
    expect(myOrdersLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
  });

  test('renders navigation bar correctly for the profile page', () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/profile']}>
        <NavigationBar />
      </MemoryRouter>
      );

    const logoLink = getByText('Online store');
    const shoppingCartLink = getByText('Shopping cart');

    expect(logoLink).toBeInTheDocument();
    expect(shoppingCartLink).toBeInTheDocument();
  });

  test('renders navigation bar correctly for other pages', () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/main']}>
        <NavigationBar />
      </MemoryRouter>
      );

    const logoLink = getByText('Online store');
    const shoppingCartLink = getByText('Shopping cart');
    const profileLink = getByText('Profile');

    expect(logoLink).toBeInTheDocument();
    expect(shoppingCartLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
  });
});

