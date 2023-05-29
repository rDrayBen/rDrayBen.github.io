import React from 'react';
import { queryByTestId, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { Home } from '../Home';
import { MemoryRouter } from "react-router-dom";

jest.mock('axios');

describe('Home Component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          photo: 'image1.jpg',
          name: 'Item 1',
          description: 'Item 1 description',
          cost: 10,
          num_in_stock: 5,
        },
        {
          photo: 'image2.jpg',
          name: 'Item 2',
          description: 'Item 2 description',
          cost: 20,
          num_in_stock: 10,
        },
      ],
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('renders item cards with correct data', async () => {
    const {getAllByTestId} = render(
    <MemoryRouter>
    <Home />
    </MemoryRouter>);
    
    await waitFor(() => {
      const itemCards = getAllByTestId('item-card');
      expect(itemCards).toHaveLength(2);

      // Check item card contents
      expect(itemCards[0]).toHaveTextContent('Item 1');
      expect(itemCards[1]).toHaveTextContent('Item 2');
    });
  });
  test('renders item cards container', async () => {
    const { queryByTestId } = render(
    <MemoryRouter>
    <Home />
    </MemoryRouter>);
    
    const cont = queryByTestId('goodsContainer');

    expect(cont).toBeInTheDocument();
  });

  test('calls the API to fetch goods data', async () => {
    render(
        <MemoryRouter>
        <Home />
        </MemoryRouter>);
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        'http://127.0.0.1:5000/good',
        expect.any(Object)
      );
    });
  });
});

