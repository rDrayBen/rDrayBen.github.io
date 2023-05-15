import './styles/bucket_component.css';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ShoppingCartComponent } from './ShoppingCartComponent';
import { useNavigate } from "react-router-dom";

export const ShoppingCart = function(){

  const[empty, setEmpty] = useState(true);
  var cartGoods = [];
  var cartItemInfo = [];
  const url = 'http://127.0.0.1:5000/good/';
  const token = sessionStorage.getItem('Token');
  const navigate = useNavigate();
  const PutConfig = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
    },
  };

  function GetCartItems(){
    if(localStorage.getItem('ShoppingCartItems') === null || localStorage.getItem('ShoppingCartItems') === '[]'){
      setEmpty(true);
    }else{
      setEmpty(false);
      cartItemInfo = JSON.parse(localStorage.getItem('ShoppingCartItems'));
      console.log(cartItemInfo);
    }
  };

  async function handleGetItems (element){
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
    };
    try {
      const response = await axios.get(
          url+element,
          config
      );
      // if(cartGoods.length < cartItemInfo.length){
      //   let flag = false;
      //   for(let i = 0; i < cartGoods.length; i++){
      //     if(cartGoods[i] === response.data){
      //       flag = true;
      //       break;
      //     }
      //   }
      //   if(!flag){
          
      //   }
      // }
      cartGoods = cartGoods.slice(0, cartItemInfo.length-1);
      cartGoods.push(response.data);
          // localStorage.setItem("cartGoods", '');
          localStorage.setItem("cartGoods", JSON.stringify(cartGoods));
          console.log(cartGoods);
      
        
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => {
    GetCartItems();
    cartItemInfo.forEach((element)=>{
          handleGetItems(element['IID']);
    });
    // cartGoods = JSON.parse(localStorage.getItem('cartGoods'));
  }, []);
  
  async function handleSingleItem (itemID, amnt_was, amnt_is){
    try{
      var data = {};
      data['num_in_stock'] = amnt_was - 1;
      const response = await axios.put(url + itemID, data, PutConfig);
      data = {};
      localStorage.setItem("ShoppingCartItems", '[]');
      localStorage.setItem("cartGoods", '[]');
      alert("Your order successfuly created");
      navigate('/main');
    }catch(error){
        console.log(error);
        alert(error);
        
    }

    // try{
    //   var data = {};
    //   const orderUrl = 'http://127.0.0.1:5000/order';
    //   data['user_id'] = sessionStorage.getItem("UID");
    //   data['good_id'] = itemID;
    //   data['amount'] = amnt_is;
    //   data['buy_date'] = 
    //   const response = await axios.put(url + itemID, data, PutConfig);
    //   data = {};
    // }catch(error){
    //     console.log(error);
    //     alert(error);
        
    // }
  }

  function handleOrder(event){
    event.preventDefault();
    let items_arr = [];
    items_arr = JSON.parse(localStorage.getItem('ShoppingCartItems'));
    items_arr.forEach((index)=>{
      cartGoods.forEach((innerIndex)=>{
        if(innerIndex['id'] === index['IID']){
          handleSingleItem(index['IID'], innerIndex['num_in_stock'], index['amount']);
        }
      });
    });

  }

  cartGoods = JSON.parse(localStorage.getItem('cartGoods'));
  

  return(
  <body>
    <h1>Shopping Cart</h1>
    <div class="item-bucket">
      {
        empty ?
        <div className='empty-cart'>Shopping cart is empty. Go grab something</div>
        : 
          cartGoods && cartGoods.map((element)=>
            <ShoppingCartComponent
            itemImage={element.photo}
            title={element.name}
            price={element.cost}
            amount_available={element.num_in_stock}
            item_id={element.id}
            />
          ) 
      }
      
        {
          empty ? <></>
           : 
          <div style={{display:'flex', justifyContent:'center'}}>
            <button type='submit' className='create-order' onClick={(e)=>handleOrder(e)}>Create order</button>
          </div>
          
        }
        
        
    </div>
  </body>
  );
}