import { Link } from "react-router-dom";
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './styles/login.css';

export const Login = function() {

    const[login, setLogin] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleLogin(e){
        setLogin(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }

    const credentials = btoa(login + ':' + password);

    const handleSubmit  = () => {
        fetch('http://127.0.0.1:5000/user/login', {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${credentials}`,
            },
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
            <form className="login-form">
                <h2>Login Form</h2>
                <label for="email">Login:</label>
                <input type="text" id="login" name="login" onChange={e=>handleLogin(e)} required/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" onChange={e=>handlePassword(e)} required/>
                <button 
                type="submit"
                id="login-user-button"
                onClick={()=>handleSubmit()}>
                    Login
                </button>
                &nbsp;&nbsp; or &nbsp;&nbsp;
                <Link to="/registration">Register</Link>
                <div className="forgot-password"><br></br>If you forgot your password, please contact us online.store@gmail.com</div>
            </form>
        </body>
    );
}