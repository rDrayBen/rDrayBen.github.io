import './styles/main.css'
import React from 'react';

export const ItemCardComponent = function({itemImage, title, description, price, button_visible, amount_available}){
    return(
        <div class="card">
            <div class="card-image">
                <img src={itemImage} alt="Item Image"/>
            </div>
            <div class="card-details">
                <h2 class="card-title">{title}</h2>
                <p class="card-description">{description}</p>
                <p class="card-price">${price}</p>
                {
                    button_visible ? 
                    (
                        (amount_available > 0) ? 
                        <button class="card-btn">Add to Cart</button> : 
                        <div style={{color:'grey'}}>Item is out of order</div>
                    )
                     : 
                    <div style={{color:'grey'}}>To make a purchaise you have to log in or make new account</div>
                }
            </div>
        </div>
    );
}