import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, useLocation, useNavigate } from 'react-router-dom';
import { Authorized } from '../Authorized';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('Authorized component', () => {
  beforeEach(() => {
    useLocation.mockReturnValue({ pathname: '/profile' });
    useNavigate.mockReturnValue(jest.fn());
  });
  

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders children when logged in', () => {
    sessionStorage.setItem('Authorization', 'fake-token');

    const { getByText } = render(
      <MemoryRouter>
        <Authorized>
          <div>Children Component</div>
        </Authorized>
      </MemoryRouter>
    );

    expect(getByText('Children Component')).toBeInTheDocument();
  });

  it('redirects and returns "/" when not logged in', () => {
    sessionStorage.removeItem('Authorization');

    const { history } = render(
      <MemoryRouter initialEntries={['/profile']}>
        <Authorized>
          <div>Children Component</div>
        </Authorized>
      </MemoryRouter>
    );

    expect(history.location.pathname).toBe('/');
  });

  it('displays alert when not logged in', () => {
    sessionStorage.removeItem('Authorization');

    render(
      <MemoryRouter initialEntries={['/profile']}>
        <Authorized>
          <div>Children Component</div>
        </Authorized>
      </MemoryRouter>
    );

    expect(window.alert).toHaveBeenCalledWith(
      'Please sign in to have access to this page'
    );
  });
});
