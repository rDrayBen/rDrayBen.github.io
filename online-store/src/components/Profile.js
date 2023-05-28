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
    
        try {
        const response = await axios.get(
            url,
            config
        );
        // console.log(response);
        setAccountData(response.data);
        } catch (error) {
            console.log(error);
            if(error.response.data.msg === "Token has expired"){
                alert('You need to log in again');
                sessionStorage.removeItem('Authorization');
                navigate('/login');
            }
        }
  };

  const handleLogOut = async event =>{
    event.preventDefault();
    sessionStorage.removeItem('Authorization');
    //sessionStorage.removeItem('Token');
    localStorage.removeItem('Authorization');
    localStorage.removeItem('Token');
    localStorage.removeItem("cartGoods");
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
        localStorage.removeItem("ShoppingCartItems");
        localStorage.removeItem("cartGoods");
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
            <div className="profile-container">
                <h2 data-testid="profileH1">Profile</h2>
                <div className="row">
                    <div className="col">
                        <label for="first-name">First Name:</label>
                        <span id="first-name">{accountData.first_name}</span>
                    </div>
                    <div className="col">
                        <label for="last-name">Last Name:</label>
                        <span id="last-name">{accountData.last_name}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label for="login">Login:</label>
                        <span id="login">{accountData.login}</span>
                    </div>
                    <div className="col">
                        <label for="address">Address:</label>
                        <span id="address">{accountData.address}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label for="phone">Phone:</label>
                        <span id="phone">{accountData.phone}</span>
                    </div>
                    <div className="col">
                        <label for="email">Email:</label>
                        <span id="email">{accountData.email}</span>
                    </div>
                </div>
                <div className="row">
                    <button className="btn" id="edit-profile-btn"><Link to="/edit_profile" style={{textDecoration:"none"}}>Edit Profile</Link></button>
                    <button data-testid="LOGOUT" className="btn" id="logout-btn" type="button"  onClick={(e)=>handleLogOut(e)}>Logout</button>
                    <button className="btn" id="delete-user-btn" onClick={(e)=>handleDelete(e)}>Delete User</button>
                </div>
            </div>
        </body>
    );
}