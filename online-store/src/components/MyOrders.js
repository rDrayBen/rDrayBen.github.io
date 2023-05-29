// import './styles/bucket_component.css';
// import React from 'react';
// import { useEffect, useState } from 'react';
// import { OrderComponent } from './OrderComponent';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// export const MyOrders = function(){
//     const[empty, setEmpty] = useState(true);
//     const[ordersData, setOrdersData] = useState([]);
//     const url = 'http://127.0.0.1:5000/order/';
//     const token = sessionStorage.getItem('Token');
//     const navigate = useNavigate();
//     async function GetOrders (){
//         const config = {
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//                 'Content-Type': 'application/json',
//                 Authorization: 'Bearer ' + token
//             },
//         };
//         try {
//             const response = await axios.get(
//                 url+sessionStorage.getItem('UID'),
//                 config
//             );
//             setOrdersData(response.data);
//             setEmpty(false);
//             console.log(response);
//         } catch (error) {
//             console.log(error);
//             alert('You need to log in again');
//             sessionStorage.removeItem('Authorization');
//             navigate('/login');
            
//         }
//       };

//     useEffect(() => {
//         GetOrders();
//     }, []);

//     return(
//     <body>
//         <h1><br></br>My orders<br></br></h1>
//         <div class="item-bucket">
//         {
//             empty ? 
//             <div className='empty-cart'>You have not ordered something</div> :
//             ordersData && ordersData.map((element)=>
//                 <OrderComponent
//                 item_id={element['good_id']}
//                 buying_date={element['buy_date']}
//                 amount_bought={element['amount']}
//                 />
//             )
//         }
            
            
//         </div>
//     </body>
//     );
// }