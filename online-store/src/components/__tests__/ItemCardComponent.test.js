import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemCardComponent } from './components/ItemCardComponent';
import { MemoryRouter } from 'react-router-dom';

describe('ItemCardComponent', () => {
  it('renders item details correctly', () => {
    const item = {
      itemImage: 'image.jpg',
      title: 'Item Title',
      description: 'Item Description',
      price: 9.99,
      button_visible: true,
      amount_available: 10,
      item_id: 123,
    };

    const { getByAltText, getByText } = render(<MemoryRouter>
        <ItemCardComponent {...item} />
    </MemoryRouter>
      
    );

    const imageElement = getByAltText('Item Image');
    const titleElement = getByText('Item Title');
    const descriptionElement = getByText('Item Description');
    const priceElement = getByText('$9.99');

    expect(imageElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  it('calls handleAddToCart when "Add to Cart" button is clicked', () => {
    const handleAddToCartMock = jest.fn();
    const item = {
      itemImage: 'image.jpg',
      title: 'Item Title',
      description: 'Item Description',
      price: 9.99,
      button_visible: true,
      amount_available: 10,
      item_id: 123,
    };

    const { getByText } = render(
        <MemoryRouter>
            <ItemCardComponent {...item} handleAddToCart={handleAddToCartMock} />
        </MemoryRouter>
      
    );

    const addToCartButton = getByText('Add to Cart');
    fireEvent.click(addToCartButton);

    expect(handleAddToCartMock).toHaveBeenCalledTimes(1);
  });

  it('displays "Item is out of order" message when amount_available is 0', () => {
    const item = {
      itemImage: 'image.jpg',
      title: 'Item Title',
      description: 'Item Description',
      price: 9.99,
      button_visible: true,
      amount_available: 0,
      item_id: 123,
    };

    const { getByText } = render(
        <MemoryRouter>
            <ItemCardComponent {...item} />
        </MemoryRouter>
      
    );

    const outOfOrderMessage = getByText('Item is out of order');
    expect(outOfOrderMessage).toBeInTheDocument();
  });

  it('displays login message when button_visible is false', () => {
    const item = {
      itemImage: 'image.jpg',
      title: 'Item Title',
      description: 'Item Description',
      price: 9.99,
      button_visible: false,
      amount_available: 10,
      item_id: 123,
    };

    const { getByText } = render(
        <MemoryRouter>
            <ItemCardComponent {...item} />
        </MemoryRouter>
      
    );

    const loginMessage = getByText('To make a purchaise you have to log in or make new account');
    expect(loginMessage).toBeInTheDocument();
  });
});
