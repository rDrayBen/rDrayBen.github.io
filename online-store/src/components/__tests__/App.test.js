import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';

describe('App', () => {
  it('renders Home component', () => {
    const { getByText } = render(<App />);
    const homeElement = getByText('Home'); // Assuming 'Home' is rendered in the Home component
    expect(homeElement).toBeInTheDocument();
  });
});

