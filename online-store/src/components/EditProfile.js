// import './styles/edit_profile.css';
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import React, {useEffect, useState } from 'react';

// export const EditProfile = function(){
//     let [accountData, setAccountData] = useState({});
//     const token = sessionStorage.getItem('Token');
//     const url = 'http://127.0.0.1:5000/user/self';
//     const navigate = useNavigate();

//     const[firstName, setFirstName] = useState('');
//     const[lastName, setLastName] = useState('');
//     const[address, setAddress] = useState('');
//     const[phone, setPhone] = useState('');
//     const[email, setEmail] = useState('');
//     const[password, setPassword] = useState('');
//     const[confirmPassword, setConfirmPassword] = useState('');

//     function handleFirstName(e){
//         setFirstName(e.target.value);
//     };
//     function handleLastName(e){
//         setLastName(e.target.value);
//     };
//     function handleAddress(e){
//         setAddress(e.target.value);
//     };
//     function handlePhone(e){
//         setPhone(e.target.value);
//     };
//     function handleEmail(e){
//         setEmail(e.target.value);
//     };
//     function handlePassword(e){
//         setPassword(e.target.value);
//     };
//     function handleConfirmPassword(e){
//         setConfirmPassword(e.target.value);
//     };
//     const handleGetMyInfo = async () => {
//         const config = {
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//                 'Content-Type': 'application/json',
//                 Authorization: 'Bearer ' + token
//             },
//         };
//         try {
//             const response = await axios.get(
//                 url,
//                 config
//             );
//         // console.log(response);
//             setAccountData(response.data);
//         } catch (error) {
//             console.log(error);
//             if(error.response.data.msg === "Token has expired"){
//                 alert('You need to log in again');
//                 navigate('/login');
//             }
//         }
//   };

//     const handleUpdate = async event => {
//         event.preventDefault();
//         const config = {
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//                 'Content-Type': 'application/json',
//                 Authorization: 'Bearer ' + token
//             },
//         };
        
//         if(password !== confirmPassword){
//             alert('Values of password and confirm password are different')
//             navigate('/edit_profile');
//         }else{
//             let userData = new Object;
//             userData = {};
//             if(firstName !== ''){
//                 userData["first_name"] = firstName;
//             }
//             if(lastName !== ''){
//                 userData["last_name"] = lastName;
//             }
//             if(email !== ''){
//                 userData["email"] = email;
//             }
//             if(phone !== ''){
//                 userData["phone"] = phone;
//             }
//             if(address !== ''){
//                 userData["address"] = address;
//             }
//             if(password !== ''){
//                 userData["password"] = password;
//             }
//             try {
//                 const response = await axios.put(
//                     url, userData,
//                     config
//                 );
//                 navigate('/profile');
//                 alert("You successfuly updated your profile data");
//             } catch (error) {
//                 console.log(error);
//                 if(error.response.data.msg === "Token has expired"){
//                     alert('You need to log in again');
//                     sessionStorage.removeItem('Authorization');
//                     navigate('/login');
//                 }
//             }
//         }
        
//   };
//   useEffect(() => {
//     handleGetMyInfo();
//   }, []);

//     return(
//         <body>
//             <div class="edit-container">
//                 <h1>Edit User Information</h1>
//                 {/* <div className='edit-profile-instructions'>Fields marked with * MUST be filled if you make any cnahges</div> */}
//                 <form id="edit-profile-form" className='edit-profile-form'>
//                     <label for="first-name">First Name</label>
//                     <input type="text" id="first_name" name="first_name" className='edit-profile-input-fields' onChange={e=>handleFirstName(e)} placeholder={accountData.first_name}/>
        
//                     <label for="last-name">Last Name</label>
//                     <input type="text" id="last_name" name="last_name" className='edit-profile-input-fields' onChange={e=>handleLastName(e)} placeholder={accountData.last_name}/>
        
//                     <label for="email">Email</label>
//                     <input type="email" id="email" name="email" className='edit-profile-input-fields' onChange={e=>handleEmail(e)} placeholder={accountData.email}/>
        
//                     <label for="password">New password</label>
//                     <input type="password" id="password" name="password" className='edit-profile-input-fields' onChange={e=>handlePassword(e)}/>
        
//                     <label for="confirm-password">Confirm new password</label>
//                     <input type="password" id="confirm_password" name="confirm_password" className='edit-profile-input-fields' onChange={e=>handleConfirmPassword(e)}/>
        
//                     <label for="phone">Phone</label>
//                     <input type="tel" id="phone" name="phone" className='edit-profile-input-fields' onChange={e=>handlePhone(e)} placeholder={accountData.phone}/>
        
//                     <label for="address">Address</label>
//                     <input type="text" id="address" name="address" className='edit-profile-input-fields' onChange={e=>handleAddress(e)} placeholder={accountData.address}/>
        
//                     <button type="submit" id="edit-submit-button" onClick={(e)=>handleUpdate(e)}>Save Changes</button>
//                 </form>
//             </div>
//         </body>
//     );
// }