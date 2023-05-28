import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import './styles/main.css'
import { ItemCardComponent } from "./ItemCardComponent";
import React from 'react';
import axios from 'axios';

export const Main = function(){
    const [goodsData, setGoodsData] = useState([]);
    const url = 'http://127.0.0.1:5000/good';
    const handleGetGoods = async () => {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
        };
    
        try {
            const response = await axios.get(
                url,
                config
            );
            // console.log(response);
            setGoodsData(response.data);
            localStorage.setItem('Items', JSON.stringify(response.data));
        } catch (error) {
            console.log(error);
        }
  };

    useEffect(() => {
        handleGetGoods();
      }, []);
    return(
        <>
        <body>
            <div class="container">
                {
                    goodsData.map((element)=>(
                        <ItemCardComponent
                        itemImage={element.photo}
                        title={element.name}
                        description={element.description}
                        price={element.cost}
                        button_visible={true}
                        amount_available={element.num_in_stock}
                        item_id={element.id}
                        />
                    ))
                }
            </div>
        </body>
        </>
    );
}