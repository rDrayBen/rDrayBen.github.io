import './styles/registration.css';
import { Link } from "react-router-dom";
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { RefreshToken} from './RefreshToken.js';

export const Registration = function(){

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[login, setLogin] = useState('');
    const[address, setAddress] = useState('');
    const[phone, setPhone] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleFirstName(e){
        setFirstName(e.target.value);
    };
    function handleLastName(e){
        setLastName(e.target.value);
    };
    function handleLogin(e){
        setLogin(e.target.value);
    };
    function handleAddress(e){
        setAddress(e.target.value);
    };
    function handlePhone(e){
        setPhone(e.target.value);
    };
    function handleEmail(e){
        setEmail(e.target.value);
    };
    function handlePassword(e){
        setPassword(e.target.value);
    };

    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    };

    const handleSubmit  = async event => {
        event.preventDefault();
        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            login : login,
            password: password,
            address: address,
            phone: phone
        }
        
        try{
            let response = await axios.post('http://127.0.0.1:5000/user', data, config);
            const credentials = btoa(login + ':' + password);
            console.log(response);
            sessionStorage.setItem('Authorization', `Basic ${credentials}`);
            sessionStorage.setItem('UID', response['data']['id']);
            localStorage.setItem('Authorization', `Basic ${credentials}`);
            navigate('/main');
        } catch (error){
            try{
                alert(error.response.data);
            }catch(e){
                alert('Not unique login or email')
            }
            
        }
      };


    return(
        <body>
            <form id="create-user-form" className='registration-form'>
                <h2>Registration Form</h2>
                <span style={{color: 'grey'}}>This data will be used for delivery</span>
                <div class="row">
                    <div class="col">
                        <label for="firstname">First Name:</label>
                        <input type="text" id="first_name" name="first_name" pattern="^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$" onChange={e=>handleFirstName(e)} required/>
                    </div>
                    <div class="col">
                        <label for="last-name">Last Name:</label>
                        <input type="text" id="last_name" name="last_name" pattern="^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$" onChange={e=>handleLastName(e)} required/>
                    </div>
                </div>
                <label for="login">Login:</label>
                <input type="text" id="login" name="login" onChange={e=>handleLogin(e)} required/>
                <label for="address">Address:</label>
                <input id="address" type="text" name="address" rows="4" onChange={e=>handleAddress(e)} required></input>
                <div class="row">
                    <div class="col">
                        <label for="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" onChange={e=>handlePhone(e)} pattern='/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im' required/>
                    </div>
                    <div class="col">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" onChange={e=>handleEmail(e)} required/>
                    </div>
                </div>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" min={5} max={10} onChange={e=>handlePassword(e)} required/>
                <button 
                type="submit"
                id="create-user-button"
                onClick = {(e)=>handleSubmit(e)}>
                  Register
                </button>
                &nbsp;&nbsp; or &nbsp;&nbsp;
                <Link to="/login">Log in</Link>
            </form>
        </body>
    );
}