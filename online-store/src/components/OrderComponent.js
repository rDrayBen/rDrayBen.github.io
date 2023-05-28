import './styles/bucket_component.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export const OrderComponent = function({item_id, buying_date, amount_bought}){

    let goods = JSON.parse(localStorage.getItem('Items'));
    var orderInfo = {};
    for(let i = 0; i < goods.length; i++){
        if(goods[i]['id'] == item_id){
            orderInfo['price'] = goods[i]['cost'];
            orderInfo['image'] = goods[i]['photo'];
            orderInfo['title'] = goods[i]['name'];
        }
    }

    return(
        <div class="card">
            <div class="card-image">
            <img src={orderInfo['image']} alt="Item Image"/>
            </div>
            <div class="card-details">
                <h2 class="card-title">{orderInfo['title']}</h2>
                <p class="card-price">Price ${orderInfo['price']}</p>
                <p class="card-price">Order creation date {buying_date.replace('T', ' ')}</p>
                <label for="card-description">Total cost ${orderInfo['price'] * amount_bought}</label>
            </div>
        </div>
    );
}