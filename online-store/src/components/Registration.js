import './styles/registration.css';
import { Link } from "react-router-dom";
import React, {useState,setState, useEffect, useRef} from 'react';
import { useNavigate } from "react-router-dom";


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

    const handleSubmit  = () => {
        fetch('http://127.0.0.1:5000/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              first_name: firstName,
              last_name: lastName,
              email: email,
              login : login,
              password: password,
              address: address,
              phone:phone
            }
          )
        })
        .then(response => {
            response.json();
            console.log(response.json());
        })
        .then(jsonResponse => {
          if (jsonResponse.status >=300) {
            throw new Error(jsonResponse.message)
          } else {
            alert('Success');     
            navigate("/");
          }
        })
        .catch(e => {
            alert(e.message);  
        });
      };


    return(
        <body>
            <form id="create-user-form" className='registration-form'>
                <h2>Registration Form</h2>
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
                        <input type="tel" id="phone" name="phone" onChange={e=>handlePhone(e)} required/>
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
                onClick = {()=>handleSubmit()}>
                  Register
                </button>
                &nbsp;&nbsp; or &nbsp;&nbsp;
                <Link to="/login">Log in</Link>
            </form>
        </body>
    );
}