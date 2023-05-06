import { Link } from "react-router-dom";
import './styles/main.css'

export const Main = function(){
    return(
        <>
        <body>
            <div class="container">
                <div class="card">
                    <div class="card-image">
                        <img src="https://via.placeholder.com/800x600" alt="Item Image"/>
                    </div>
                    <div class="card-details">
                        <h2 class="card-title">Item Title</h2>
                        <p class="card-description">Item Description</p>
                        <p class="card-price">$50.00</p>
                        <button class="card-btn">Add to Cart</button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-image">
                        <img src="https://via.placeholder.com/800x600" alt="Item Image"/>
                    </div>
                    <div class="card-details">
                        <h2 class="card-title">Item Title</h2>
                        <p class="card-description">Item Description</p>
                        <p class="card-price">$50.00</p>
                        <button class="card-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </body>
        </>
    );
}