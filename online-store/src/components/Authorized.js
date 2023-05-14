import React, {useState} from "react";
import { Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Authorized = function({ children }) {
    const location = useLocation();
    const isLoggedIn = sessionStorage.getItem("Authorization");
    const navigate = useNavigate();
    // if (location.pathname !== '/' || location.pathname !== '/login' || location.pathname !== '/registration') {
        
    // }else if(!isLoggedIn && (location.pathname !== '/profile' || 
    //     location.pathname !== '/shopping_cart' || 
    //     location.pathname !== '/main' ||
    //     location.pathname !== '/edit_profile')){
    //         alert("Please sign in to have access to this page");
    //         return (
    //             <Navigate to="/" />
    //         );
    //     }
    if(location.pathname === '/profile' || 
        location.pathname === '/shopping_cart' || 
        location.pathname === '/main' ||
        location.pathname === '/edit_profile'){
            if(!isLoggedIn){
                alert("Please sign in to have access to this page");
                navigate('/');
                return '/';
            }else{

            }
    }
    return children;
}

