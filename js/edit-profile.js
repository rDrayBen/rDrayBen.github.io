document.addEventListener('DOMContentLoaded', () => {
    const EditButton = document.getElementById('edit-submit-button');

    async function fetchData() {
        const token = localStorage.getItem('token');
        const url = 'http://127.0.0.1:5000/user/self';
        const formInfo = new FormData(document.getElementById('edit-profile-form'));
        const data = JSON.stringify(Object.fromEntries(formInfo));
        console.log(data);
        if(formInfo.password == formInfo.confirm_password){
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: data,
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => alert(error));
        }else{
            alert('Password and confirm password are different');
        }
        
    }

    EditButton.addEventListener('click', fetchData);
});

// const CreateUserButton = document.getElementById('edit-submit-button');
// function fetchData() {
//     const token = localStorage.getItem('token');
//     const url = 'http://127.0.0.1:5000/user/self';
    
//     const formInfo = new FormData(document.getElementById('edit-profile-form'));
//     const data = Object.fromEntries(formInfo);

//     if(JSON.stringify(formInfo).password == JSON.stringify(formInfo).confirm_password){
//         fetch(url, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + token
//             },
//             body: JSON.stringify(data),
//             })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//             })
//             .catch(error => alert(error));
//     }else{
//         alert('Password and confirm password are different');
//     }
    
    
// }
  
// CreateUserButton.addEventListener('click', fetchData);