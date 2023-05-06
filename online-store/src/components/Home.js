import land_page from '../images/landing_page.jpg'
import { NavigationBar } from './NavigationBar';
import { Link } from "react-router-dom";

export const Home = function(){

    return(
        <>
        {/* <header>
            <h1 class="logo">
                <a href="" class="logo">
                    Online store
                </a>
            </h1>
            <div class="buttons">
                <button class="registration"><Link>Registration</Link></button>
                <button class="login"><Link to="">Login</Link></button>
                <button><Link to="">Main page</Link></button>
            </div>
        </header> */}
            <main>
                <h1>About Us</h1>
                <div>
                    <img src={land_page} alt="Online store picture"></img>
                </div>
                <p>
                    Welcome to the simple internet store where you can order and buy all available products.
                </p>
            </main>
        </>
        
    );
}