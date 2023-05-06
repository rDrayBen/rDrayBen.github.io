import './styles/edit_profile.css';

export const EditProfile = function(){
    return(
        <body>
            <div class="edit-container">
                <h1>Edit User Information</h1>
                <div className='edit-profile-instructions'>Fields marked with * MUST be filled if you make any cnahges</div>
                <form id="edit-profile-form" className='edit-profile-form'>
                    <label for="first-name">First Name</label>
                    <input type="text" id="first_name" name="first_name" className='edit-profile-input-fields'/>
        
                    <label for="last-name">Last Name</label>
                    <input type="text" id="last_name" name="last_name" className='edit-profile-input-fields'/>
        
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" className='edit-profile-input-fields'/>
        
                    <label for="password">Password*</label>
                    <input type="password" id="password" name="password" className='edit-profile-input-fields' required/>
        
                    <label for="confirm-password">Confirm Password*</label>
                    <input type="password" id="confirm_password" name="confirm_password" className='edit-profile-input-fields' required/>
        
                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" className='edit-profile-input-fields'/>
        
                    <label for="address">Address</label>
                    <input type="text" id="address" name="address" className='edit-profile-input-fields'/>
        
                    <button type="submit" id="edit-submit-button">Save Changes</button>
                </form>
            </div>
        </body>
    );
}