import './styles/profile.css';
import { Link } from "react-router-dom";


export const Profile = function(){

    return(
        <body>
            <div class="profile-container">
                <h2>Profile</h2>
                <div class="row">
                    <div class="col">
                        <label for="first-name">First Name:</label>
                        <span id="first-name">Dmytro</span>
                    </div>
                    <div class="col">
                        <label for="last-name">Last Name:</label>
                        <span id="last-name">Rabotiahov</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="login">Login:</label>
                        <span id="login">remon</span>
                    </div>
                    <div class="col">
                        <label for="address">Address:</label>
                        <span id="address">123 Name Street</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="phone">Phone:</label>
                        <span id="phone">123456789</span>
                    </div>
                    <div class="col">
                        <label for="email">Email:</label>
                        <span id="email">remon@gmail.com</span>
                    </div>
                </div>
                <div class="row">
                    <button class="btn" id="edit-profile-btn"><Link to="/edit_profile" style={{textDecoration:"none"}}>Edit Profile</Link></button>
                    <button class="btn" id="logout-btn">Logout</button>
                    <button class="btn" id="delete-user-btn">Delete User</button>
                </div>
            </div>
        </body>
    );
}