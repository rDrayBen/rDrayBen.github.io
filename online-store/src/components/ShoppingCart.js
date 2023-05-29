// import './styles/bucket_component.css';
// import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { ShoppingCartComponent } from './ShoppingCartComponent';
// import { useNavigate } from "react-router-dom";

// export const ShoppingCart = function(){

//   const[empty, setEmpty] = useState(true);
//   var cartGoods = [];
//   var cartItemInfo = [];
//   const url = 'http://127.0.0.1:5000/good/';
//   const token = sessionStorage.getItem('Token');
//   const navigate = useNavigate();
//   const PutConfig = {
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer ' + token
//     },
//   };

//   function GetCartItems(){
//     if(localStorage.getItem('ShoppingCartItems') === null || localStorage.getItem('ShoppingCartItems') === '[]'){
//       setEmpty(true);
//     }else{
//       setEmpty(false);
//       cartItemInfo = JSON.parse(localStorage.getItem('ShoppingCartItems'));
//       console.log(cartItemInfo);
//     }
//   };

//   async function handleGetItems (element){
//     const config = {
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'application/json'
//         },
//     };
//     try {
//       const response = await axios.get(
//           url+element,
//           config
//       );
//       // if(cartGoods.length < cartItemInfo.length){
//       //   let flag = false;
//       //   for(let i = 0; i < cartGoods.length; i++){
//       //     if(cartGoods[i] === response.data){
//       //       flag = true;
//       //       break;
//       //     }
//       //   }
//       //   if(!flag){
          
//       //   }
//       // }
//       cartGoods = cartGoods.slice(0, cartItemInfo.length-1);
//       cartGoods.push(response.data);
//           // localStorage.setItem("cartGoods", '');
//           localStorage.setItem("cartGoods", JSON.stringify(cartGoods));
//           console.log(cartGoods);
      
        
//     } catch (error) {
//         console.log(error);
//     }
//   };

//   useEffect(() => {
//     GetCartItems();
//     cartItemInfo.forEach((element)=>{
//           handleGetItems(element['IID']);
//     });
//     // cartGoods = JSON.parse(localStorage.getItem('cartGoods'));
//   }, []);
  
//   async function handleSingleItem (itemID, amnt_was, amnt_is){
//     function getFormattedDateTime() {
//       const now = new Date();
      
//       // Get individual date and time components
//       const year = now.getFullYear().toString();
//       const month = String(now.getMonth() + 1).padStart(2, '0');
//       const day = String(now.getDate()).padStart(2, '0');
//       const hours = String(now.getHours()).padStart(2, '0');
//       const minutes = String(now.getMinutes()).padStart(2, '0');
//       const seconds = String(now.getSeconds()).padStart(2, '0');
      
//       // Construct the formatted date-time string
//       const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      
//       return formattedDateTime;
//     }
//     try{
//       let data = {};
//       data['num_in_stock'] = amnt_was - 1;
//       const response = await axios.put(url + itemID, data, PutConfig);
//       data = {};
//       try{
//         let orderData = {};
//         const orderUrl = 'http://127.0.0.1:5000/order';
//         orderData['user_id'] = Number(sessionStorage.getItem("UID"));
//         orderData['good_id'] = Number(itemID);
//         orderData['amount'] = Number(amnt_is);
//         orderData['buy_date'] = String(getFormattedDateTime());
//         console.log(getFormattedDateTime());
//         const orderResponse = await axios.post(orderUrl, orderData, PutConfig);
//         console.log(orderResponse);
//         orderData = {};
//       }catch(error){
//           console.log(error);
//           if(error.response.data.msg === "Token has expired"){
//             alert('You need to log in again');
//             sessionStorage.removeItem('Authorization');
//             navigate('/login');
//         }
//           alert(error);
//       }
//     }catch(error){
//         console.log(error);
//         if(error.response.data.msg === "Token has expired"){
//           alert('You need to log in again');
//           sessionStorage.removeItem('Authorization');
//           navigate('/login');
//       }
//         alert(error);
//     }
//   }

//   function handleOrder(event){
//     event.preventDefault();
//     let items_arr = [];
//     items_arr = JSON.parse(localStorage.getItem('ShoppingCartItems'));
//     items_arr.forEach((index)=>{
//       cartGoods.forEach((innerIndex)=>{
//         if(innerIndex['id'] === index['IID']){
//           handleSingleItem(index['IID'], innerIndex['num_in_stock'], index['amount']);
//         }
//       });
//     });
//     localStorage.setItem("ShoppingCartItems", '[]');
//     localStorage.setItem("cartGoods", '[]');
//     alert("Your order successfuly created");
//     navigate('/main');
//   }

//   cartGoods = JSON.parse(localStorage.getItem('cartGoods'));
  

//   return(
//   <body>
//     <h1><br></br>Shopping Cart<br></br></h1>
//     <div class="item-bucket">
//       {
//         empty ?
//         <div className='empty-cart'>Shopping cart is empty. Go grab something</div>
//         : 
//           cartGoods && cartGoods.map((element)=>
//             <ShoppingCartComponent
//             itemImage={element.photo}
//             title={element.name}
//             price={element.cost}
//             amount_available={element.num_in_stock}
//             item_id={element.id}
//             />
//           ) 
//       }
      
//         {
//           empty ? <></>
//            : 
//           <div style={{display:'flex', justifyContent:'center'}}>
//             <button type='submit' className='create-order' onClick={(e)=>handleOrder(e)}>Create order</button>
//           </div>
          
//         }
        
        
//     </div>
//   </body>
//   );
// }