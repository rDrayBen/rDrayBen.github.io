function fetchData() {
    const token = localStorage.getItem('token');
    const url = 'http://127.0.0.1:5000/user/self';
  
    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(response => response.json())
    .then(data => {
        const profileContainer = document.querySelector('.container');

        const header1 = document.createElement('h2');
        header1.textContent = 'User Profile';

        const rowElem1 = document.createElement('div');
        const rowElem2 = document.createElement('div');
        const rowElem3 = document.createElement('div');

        rowElem1.className = 'row';
        rowElem2.className = 'row';
        rowElem1.className = 'row';

        const colElem1 = document.createElement('div');
        const colElem2 = document.createElement('div');
        const colElem3 = document.createElement('div');
        const colElem4 = document.createElement('div');
        const colElem5 = document.createElement('div');
        const colElem6 = document.createElement('div');

        colElem1.className = 'col';
        colElem2.className = 'col';
        colElem3.className = 'col';
        colElem4.className = 'col';
        colElem5.className = 'col';
        colElem6.className = 'col';

        const label_first_name = document.createElement('label');
        const label_last_name = document.createElement('label');
        const label_login = document.createElement('label');
        const label_address = document.createElement('label');
        const label_phone = document.createElement('label');
        const label_email = document.createElement('label');

        label_first_name.textContent = 'First Name:';
        label_last_name.textContent = 'Last Name:';
        label_login.textContent = 'Login:';
        label_address.textContent = 'Address:';
        label_phone.textContent = 'Phone:';
        label_email.textContent = 'Email:';

        const span_first_name = document.createElement('span');
        const span_last_name = document.createElement('span');
        const span_login = document.createElement('span');
        const span_address = document.createElement('span');
        const span_phone = document.createElement('span');
        const span_email = document.createElement('span');

        span_first_name.textContent = data.first_name;
        span_last_name.textContent = data.last_name;
        span_login.textContent = data.login;
        span_address.textContent = data.address;
        span_phone.textContent = data.phone;
        span_email.textContent = data.email;

        colElem1.appendChild(label_first_name);
        colElem1.appendChild(span_first_name);

        colElem2.appendChild(label_last_name);
        colElem2.appendChild(span_last_name);

        colElem3.appendChild(label_login);
        colElem3.appendChild(span_login);

        colElem4.appendChild(label_address);
        colElem4.appendChild(span_address);

        colElem5.appendChild(label_phone);
        colElem5.appendChild(span_phone);

        colElem6.appendChild(label_email);
        colElem6.appendChild(span_email);

        rowElem1.appendChild(colElem1);
        rowElem1.appendChild(colElem2);

        rowElem2.appendChild(colElem3);
        rowElem2.appendChild(colElem4);

        rowElem3.appendChild(colElem5);
        rowElem3.appendChild(colElem6);

        profileContainer.prepend(rowElem3);
        profileContainer.prepend(rowElem2);
        profileContainer.prepend(rowElem1);
        profileContainer.prepend(header1);
    })
    .catch(error => alert(error));
    
}
  
window.addEventListener('load', fetchData);
  