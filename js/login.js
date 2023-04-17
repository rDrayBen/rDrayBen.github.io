
document.addEventListener('DOMContentLoaded', () => {
    
    const loginButton = document.getElementById('login-user-button');
    function Login() {
        const username = document.getElementById('login').value;
        const password = document.getElementById('password').value;
        console.log(username, password);
        const credentials = username + ':' + password;
        const encodedCredentials = btoa(credentials);
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: `Basic ${encodedCredentials}`,
        //     },
        // };
        // try {
        //     const response = await fetch('http://127.0.0.1:5000/user/login', options);
        //     const dataJSON = await response.json();
        //     // console.log(dataJSON);
        // } catch (error) {
        //     alert('Invalid username or password');
        // }
        const url = 'http://127.0.0.1:5000/user/login';
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${encodedCredentials}`,
            },
          })
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
    }
    loginButton.addEventListener('click', Login);
});