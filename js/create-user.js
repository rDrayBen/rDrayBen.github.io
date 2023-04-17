document.addEventListener('DOMContentLoaded', () => {
    var CreateUserButton = document.getElementById('create-user-button');

    function CreateUser() {
        const formInfo = new FormData(document.getElementById('create-user-form'));
        const data = Object.fromEntries(formInfo);
        console.log(JSON.stringify(data));
        // const requestData = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // };
        const url = 'http://127.0.0.1:5000/user';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => {
            response.json();
            console.log(response.ok)
          })
          .then(data => {
            console.log(data);
          })
        //   .catch(error => alert(error));
        // const response = await fetch('http://127.0.0.1:5000/user', requestData);
        // const dataJSON = response.json();
        // console.log(dataJSON);
        // if (dataJSON.status_code === 200) {
        //     alert("Peremoga");
        //     window.location.href = "../html/main_page.html";
        // }else if(dataJSON.code === 406){
        //     alert('Entered phone number is already used');
        //     window.location.href = "../html/registration_page.html";
        // }else if(dataJSON.code === 407){
        //     alert('Entered email is already used');
        //     window.location.href = "../html/registration_page.html";
        // }else if(dataJSON.code === 408){
        //     alert('Entered login is already used');
        //     window.location.href = "../html/registration_page.html";
        // }
        
    }

    CreateUserButton.addEventListener('click', CreateUser);
});