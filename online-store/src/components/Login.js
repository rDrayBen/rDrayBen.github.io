// import { Link } from "react-router-dom";
// import React, {useState} from 'react';
// import { useNavigate } from "react-router-dom";
// import './styles/login.css';
// import axios from 'axios';

// export const Login = function() {

//   const[login, setLogin] = useState('');
//   const[password, setPassword] = useState('');
//   const loginUrl = 'http://127.0.0.1:5000/user/login';

//   const navigate = useNavigate();

//   function handleLogin(e){
//       setLogin(e.target.value);
//   }

//   function handlePassword(e){
//       setPassword(e.target.value);
//   }

//   const credentials = btoa(login + ':' + password);

    
//   const config = {
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//         Authorization: `Basic ${credentials}`
//     }
//   };

//   const handleSubmit = async event =>{
//     event.preventDefault();
//     if(login === '' || password === ''){
//         alert('Login and password fields must be filled');
//     }else{
//         try{
//             const response = await axios.get(loginUrl, config);
//             console.log(response);
//             sessionStorage.setItem('Authorization', `Basic ${credentials}`);
//             sessionStorage.setItem('Token', response['data']['token']);
//             navigate('/main');

//             const token = sessionStorage.getItem('Token');
//             const url = 'http://127.0.0.1:5000/user/self';
//             const Userconfig = {
//                 headers: {
//                     'Access-Control-Allow-Origin': '*',
//                     'Content-Type': 'application/json',
//                     Authorization: 'Bearer ' + token
//                 },
//             };
            
//             try {
//             const response = await axios.get(
//                 url,
//                 Userconfig
//             );
//             console.log(response);
//             sessionStorage.setItem('UID', response["data"]['id']);
//             } catch (error) {
//                 console.log(error);
//                 if(error.response.data.msg === "Token has expired"){
//                     alert('You need to log in again');
//                     sessionStorage.removeItem('Authorization');
//                     navigate('/login');
//                 }
//             }
//         }catch(error){
//             console.log(error);
//             alert(error.response.data);
//             // if(login === 'abc' && password === '11111'){
//             //     sessionStorage.setItem('Authorization', `Basic ${credentials}`);
//             //     navigate('/main');
//             // }else{
//             //     alert('Wrong data entered');
//             // }
            
//         }
//     }
//   }

//   return(
//       <body>
//           <form className="login-form">
//               <h2>Login Form</h2>
//               <label for="email">Login:</label>
//               <input type="text" id="login" name="login" onChange={e=>handleLogin(e)} required/>
//               <label for="password">Password:</label>
//               <input type="password" id="password" name="password" onChange={e=>handlePassword(e)} required/>
//               <button 
//               type="submit"
//               id="login-user-button"
//               onClick={(e)=>handleSubmit(e)}>
//                   Login
//               </button>
//               &nbsp;&nbsp; or &nbsp;&nbsp;
//               <Link to="/registration">Register</Link>
//               <div className="forgot-password"><br></br>If you forgot your password, please contact us online.store@gmail.com</div>
//           </form>
//       </body>
//   );
// }