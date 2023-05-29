import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from '../Home';


describe('Home component', () => {
  it('renders home without errors', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });
  it('renders navigation bar without errors', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

  });
  
  
});
