async function  fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        const userList = document.createElement('ul');

        users.fetchEach(user ==> {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendiChild(listItem)
        });
        dataContainer.appendChild(userList);
    } catch (error) {
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error)
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);