document.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.getElementById('delete-user-btn');
    async function Delete() {
        const url = 'http://127.0.0.1:5000/user/self';
        const token = localStorage.getItem('token');
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token
            },
          })
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
    }
    deleteButton.addEventListener('click', Delete);
});