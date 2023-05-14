import './styles/bucket_component.css';
import React from 'react';

export const ShoppingCart = function(){

    return(
    <body>
        <h1>Item Bucket</h1>
        <div class="item-bucket">
          <div class="card">
                  <div class="card-image">
                      <img src="https://via.placeholder.com/800x600" alt="Item Image"/>
                  </div>
                  <div class="card-details">
                      <h2 class="card-title">Item Title</h2>
                      <p class="card-price">$50.00</p>
              <label for="card-description">Amount</label>
                    <input type="number" min="0" id="amount-items" name="amount-items" required />
                  </div>
              </div>
        </div>
      </body>
      );
}