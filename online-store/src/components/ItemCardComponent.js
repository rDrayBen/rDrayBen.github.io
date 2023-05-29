// import './styles/main.css'
// import React from 'react';

// export const ItemCardComponent = function({itemImage, title, description, price, button_visible, amount_available, item_id}){

//     function handleAddToCart(){
//         if(localStorage.getItem('ShoppingCartItems') === null){
//             let items_arr = [];
//             var element = {
//                 IID: item_id,
//                 amount: 1
//             };
//             items_arr.push(element);
//             localStorage.setItem('ShoppingCartItems', JSON.stringify(items_arr));
//             items_arr = [];
//         }else{
//             let items_arr = [];
//             items_arr = JSON.parse(localStorage.getItem('ShoppingCartItems'));
//             const checkID = obj => obj.IID === item_id;
//             if(!items_arr.some(checkID)){
//                 var element = {
//                     IID: item_id,
//                     amount: 1
//                 };
//                 items_arr.push(element);
//                 localStorage.setItem('ShoppingCartItems', JSON.stringify(items_arr));
//                 items_arr = [];
//             }
//         }
//     }

//     return(
//         <div class="card">
//             <div class="card-image">
//                 <img src={itemImage} alt="Item Image"/>
//             </div>
//             <div class="card-details">
//                 <h2 class="card-title">{title}</h2>
//                 <p class="card-description">{description}</p>
//                 <p class="card-price">${price}</p>
//                 {
//                     button_visible ? 
//                     (
//                         (amount_available > 0) ? 
//                         <button class="card-btn" onClick={()=>handleAddToCart()}>Add to Cart</button> : 
//                         <div style={{color:'grey'}}>Item is out of order</div>
//                     )
//                      : 
//                     <div style={{color:'grey'}}>To make a purchaise you have to log in or make new account</div>
//                 }
//             </div>
//         </div>
//     );
// }