import { getAllUsers } from './petitions.js';

const listUsers = document.getElementById('users');

document.addEventListener('DOMContentLoaded', async ()=>{
    const users = await getAllUsers();

    let template = listUsers.innerHTML;
    for(const user of users){
        template += `
        <option value="${user.id}">${user.fullname}</option>`;
    }
    console.log(users);
    listUsers.innerHTML = template;
});