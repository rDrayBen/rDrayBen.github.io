import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import './styles/header.css';
import './styles/index.css';
import './styles/main.css';
import React from 'react';

export const NavigationBar = function(){
    const location = useLocation();

    const renderContainer = (pathname) => {
        switch (pathname) {
          case '/':
            return (
                <header>
                    <h1 class="logo">
                        <Link to='/' className="logo">
                            Online Store
                        </Link>
                    </h1>
                    <div class="buttons">
                        <button class="registration"><Link to="/registration" style={{textDecoration:"none"}}>Registration</Link></button>
                        <button class="login"><Link to="/login" style={{textDecoration:"none"}}>Login</Link></button>
                        {/* <button><Link to="/main" style={{textDecoration:"none"}}>Main page</Link></button> */}
                    </div>
                </header>
            );
            case '/login':
                return (
                    <header>
                        <Link to='/' className="logo">
                            Online Store
                        </Link>
                    </header>
                );
            case '/registration':
                return (
                    <header>
                        <Link to='/' className="logo">
                            Online Store
                        </Link>
                    </header>
                );
            case '/edit_profile':
                return (
                    <header>
                        <h1 class="logo">
                            <Link to='/main' className="logo">
                                Online Store
                            </Link>
                        </h1>
                        <Link to="/profile" class="profile" style={{textDecoration:"none"}}>Back to profile</Link>
                    </header> 
                );
            case '/shopping_cart':
                return (
                    <header>
                        <h1 class="logo">
                            <Link to="/main" class="logo">
                                Online store
                            </Link>
                        </h1>
                        {/* <form class="search-form">
                            <input type="text" class="input-field" placeholder="Search..."/>
                            <button type="submit" class="submit-search">Search</button>
                        </form> */}
                        <Link to='/my_orders' class="item-bucket">My Orders</Link>
                        <Link to="/profile" class="profile">Profile</Link>   
                    </header>
                );
                case '/profile':
                return (
                    <header>
                        <h1 class="logo">
                            <Link to="/main" class="logo">
                                Online store
                            </Link>
                        </h1>
                        {/* <form class="search-form">
                            <input type="text" class="input-field" placeholder="Search..."/>
                            <button type="submit" class="submit-search">Search</button>
                        </form> */}
                            <Link to='/shopping_cart' class="item-bucket">Shopping cart</Link>
                    </header>
                );
          default:
            return (
                <header>
                    <h1 class="logo">
                        <Link to="/main" class="logo">
                            Online store
                        </Link>
                    </h1>
                    {/* <form class="search-form">
                        <input type="text" class="input-field" placeholder="Search..."/>
                        <button type="submit" class="submit-search">Search</button>
                    </form> */}
                        <Link to="/shopping_cart" class="item-bucket">Shopping cart</Link>
                        <Link to="/profile" class="profile">Profile</Link>
                    
                </header>
            );
        }
      }
    
    
      return (
            <>
                {
                    renderContainer(location.pathname)
                }
            </>
      );
    
}