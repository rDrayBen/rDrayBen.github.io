import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Authorized = function({ children }) {
    const location = useLocation();
    const isLoggedIn = sessionStorage.getItem("Authorization");
    const navigate = useNavigate();
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

