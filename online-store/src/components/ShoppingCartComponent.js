// import './styles/bucket_component.css';
// import React from 'react';
// import { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";

// export const ShoppingCartComponent = function({itemImage, title, price, amount_available, item_id}){
    
//     const [count, setCount] = useState(1);
//     const navigate = useNavigate();
//     function handleItemDelete(event){
        
//         let items_arr = [];
//         items_arr = JSON.parse(localStorage.getItem('ShoppingCartItems'));
//         for(let i = 0; i < items_arr.length; i++){
//             if(items_arr[i]['IID'] === item_id){
//                 items_arr.splice(i, 1);
//                 var goods = [];
//                 goods = JSON.parse(localStorage.getItem("cartGoods"));
//                 for(let j = 0; j < goods.length; j++){
//                     if(goods[j]['id'] === item_id){
//                         goods.splice(j, 1);
//                         localStorage.setItem("cartGoods", JSON.stringify(goods));
//                     }
//                 }
//                 break;
//             }
//         }
//         localStorage.setItem("ShoppingCartItems", JSON.stringify(items_arr));
//         setCount(0);
//         navigate('/shopping_cart');
//     }

//     function handleAmount(event){
//         setCount(Number(event.target.value));
//         let items_arr = [];
//         items_arr = JSON.parse(localStorage.getItem('ShoppingCartItems'));
//         for(let i = 0; i < items_arr.length; i++){
//             if(items_arr[i]['IID'] === item_id){
//                 items_arr[i]['amount'] = count;
//                 break;
//             }
//         }
//     }

//     return(
//         <div class="card">
//             <div class="card-image">
//             <img src={itemImage} alt="Item Image"/>
//             </div>
//             <div class="card-details">
//                 <h2 class="card-title">{title}</h2>
//                 <p class="card-price">${price}</p>
//                 <label for="card-description">Amount</label>
//                 <input 
//                 type="number" 
//                 min="0" 
//                 max={amount_available} 
//                 id="amount-items" 
//                 name="amount-items" 
//                 value={count} 
//                 onChange={(e) => handleAmount(e)} 
//                 style={{width:'100px'}}
//                 placeholder={`Max ${amount_available} items`}
//                 required />
//                 <div>
//                   <button className='delete-item-button' onClick={(e)=>handleItemDelete(e)}>Delete item from cart</button>
//                 </div>
//             </div>
//         </div>
//     );
// }