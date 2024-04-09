import { getAllUsers } from './petitions.js';
import { GetAllTasks } from './petitions.js';

const listUsers = document.getElementById('users');
const Tasktable = document.getElementById('Tasktable');


document.addEventListener('DOMContentLoaded', async ()=>{
    const users = await getAllUsers();

    let template = listUsers.innerHTML;
    let template2 = Tasktable.innerHTML;
    for(const user of users){
        template += `
        <option value="${user.id}">${user.fullname}</option>`;
    }

    const tasks = await GetAllTasks();
    for(const all of tasks){
        template2 += `
        <tr>
            <td>${all.id}</td>
            <td>${all.fullname}</td>
            <td>${all.title}</td>
            <td>
                <button class="btn btn-secondary btn-sm">
                  <span>Update</span> <i class="nf nf-md-pencil"></i>
                </button>
                <button class="btn btn-danger btn-sm">
                  <span>Delete</span> <i class="nf nf-cod-trash"></i>
                </button>
            </td>
        </tr>
        `;
    }

    listUsers.innerHTML = template;
    Tasktable.innerHTML = template2;
});

listUsers.document.addEventListener('change', ()=>{
    
});