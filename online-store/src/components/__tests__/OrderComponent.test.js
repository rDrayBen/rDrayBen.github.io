import React from 'react';
import { render } from '@testing-library/react';
import { OrderComponent } from '../OrderComponent';
import { MemoryRouter } from 'react-router-dom';

describe('OrderComponent', () => {
  it('renders the order details correctly', () => {
    const item_id = 1;
    const buying_date = '2023-05-27T12:34:56Z';
    const amount_bought = 2;

    const { getByAltText, getByText } = render(<MemoryRouter>
        <OrderComponent item_id={item_id} buying_date={buying_date} amount_bought={amount_bought} />
        </MemoryRouter>
      
    );

    // Assert the rendered order details
    const itemImage = getByAltText('Item Image');
    const title = getByText('Order Title');
    const price = getByText('Price $10');
    const orderCreationDate = getByText('Order creation date 2023-05-27 12:34:56');
    const totalCost = getByText('Total cost $20');

    expect(itemImage).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(orderCreationDate).toBeInTheDocument();
    expect(totalCost).toBeInTheDocument();
  });
});
