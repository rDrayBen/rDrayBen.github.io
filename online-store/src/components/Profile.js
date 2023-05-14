import { useEffect, useState } from 'react';
import './styles/profile.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React from 'react';

export const Profile = function(){
    const [accountData, setAccountData] = useState({});
    const token = sessionStorage.getItem('Token');
    const url = 'http://127.0.0.1:5000/user/self';
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    

    const handleGetMyInfo = async () => {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
        };
        // const configLogin = {
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json',
        //         Authorization: sessionStorage.getItem('Authorization')
        //     }
        // };
        // try {
        //     const response1 = await axios.get('http://127.0.0.1:5000/user/login', configLogin);
        //     sessionStorage.setItem('Token', response1['data']['token']);
        //     console.log(response1.data.token);
            
        // } catch (error) {
        //     alert('Log in again to continue');
        //     navigate('/login');
        // }
    
        try {
        const response = await axios.get(
            url,
            config
        );
        // console.log(response);
        setAccountData(response.data);
        } catch (error) {
        console.log(error);
        }
  };

  const handleLogOut = async event =>{
    event.preventDefault();
    sessionStorage.removeItem('Authorization');
    //sessionStorage.removeItem('Token');
    localStorage.removeItem('Authorization');
    localStorage.removeItem('Token');
    navigate('/');
  }

  const handleDelete = async event =>{
    event.preventDefault();
    setModal(!modal);
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
    };
    try {
        const response = await axios.delete(url, config);
        sessionStorage.removeItem('Authorization');
        //sessionStorage.removeItem('Token');
        localStorage.removeItem('Authorization');
        localStorage.removeItem('Token');
        navigate('/');
        alert('Your account was successfully deleted');
    } catch (error) {
        console.log(error);
    }
  }

    useEffect(() => {
        handleGetMyInfo();
      }, []);


    const toggle = () => setModal(!modal);
    return(
        <body>
            <div class="profile-container">
                <h2>Profile</h2>
                <div class="row">
                    <div class="col">
                        <label for="first-name">First Name:</label>
                        <span id="first-name">{accountData.first_name}</span>
                    </div>
                    <div class="col">
                        <label for="last-name">Last Name:</label>
                        <span id="last-name">{accountData.last_name}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="login">Login:</label>
                        <span id="login">{accountData.login}</span>
                    </div>
                    <div class="col">
                        <label for="address">Address:</label>
                        <span id="address">{accountData.address}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="phone">Phone:</label>
                        <span id="phone">{accountData.phone}</span>
                    </div>
                    <div class="col">
                        <label for="email">Email:</label>
                        <span id="email">{accountData.email}</span>
                    </div>
                </div>
                <div class="row">
                    <button class="btn" id="edit-profile-btn"><Link to="/edit_profile" style={{textDecoration:"none"}}>Edit Profile</Link></button>
                    <button class="btn" id="logout-btn" onClick={(e)=>handleLogOut(e)}>Logout</button>
                    <button class="btn" id="delete-user-btn" onClick={(e)=>handleDelete(e)}>Delete User</button>
                </div>
            </div>
        </body>
    );
}