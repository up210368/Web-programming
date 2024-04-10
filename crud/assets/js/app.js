import { getAllUsers } from './petitions.js';
import { GetAllTasks } from './petitions.js';

const listUsers = document.getElementById('users');
const Tasktable = document.getElementById('Tasktable');
const lonelyTask = document.getElementById('lonelytask');
const saveButton = document.getElementById('createTask');
const formTask = document.getElementById('form-task');


document.addEventListener('DOMContentLoaded', async ()=>{
    const users = await getAllUsers();

    let template = listUsers.innerHTML;
    let template2 = Tasktable.innerHTML;
    let template3 = lonelyTask.innerHTML;
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

    
    for (const id of tasks) {
        template3 += `
        <option value="${id.taskid}">${id.taskid}</option>
        `;
    }

    listUsers.innerHTML = template;
    Tasktable.innerHTML = template2;
    lonelyTask.innerHTML = template3;

    //create
    formTask.document.addEventListener('submit', async (event)=>{
        //let formulario = saveButton.onformdata.;
        event.preventDefault();

        const formData = new FormData(fromTask);
        const title = formData.get('title');
        const userId = formData.get('users');

        await fetch('api/createTask.php',{
            method: 'POST',
            body: formData
        });
    });
});





/* Mostrar las tareas de cada usuario.
listUsers.document.addEventListener('change', ()=>{
    let template = "";

});*/

