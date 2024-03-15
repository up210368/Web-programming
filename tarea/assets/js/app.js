// Elementos HTML
const userSelect = document.getElementById('select-users');
const userContainer = document.getElementById('user-container');
const taskContainer = document.getElementById('task-container');
// Codígo nesesario para mostrar información
getAllUsers().then(function(json){
  for(let i = 0; i < json.length; i++){
    const option = document.createElement('option');
    option.setAttribute("value", i);
    option.innerText = json[i].firstname;
    userSelect.appendChild(option);
  }
  
});

userSelect.addEventListener("change", (event)=>{
  getAllUsers().then(function(json){
    const ul = document.createElement('ul');
      const li1 = document.createElement('li');
      const li2 = document.createElement('li');
      li1.innerText = `Nombre completo: ${json[event.target.value].firstname} ${json[event.target.value].lastname}`;
      li2.innerText = `Email: ${json[event.target.value].email}`;
      ul.appendChild(li1);
      ul.appendChild(li2);
    userContainer.appendChild(ul);
  });
});
// Fin de codígo 

// Funciones
/**
 * Optiene una lista de todos los usuarios que pueden existir
 * @returns {Promise<User[]>}
 */
function getAllUsers() {
  return fetch('/data/usuarios.json')
    .then(resp => resp.json());
}

/**
 * Optiene una lista de todas las tareas que hay de todos los usuarios
 * @returns {Promise<Task[]>}
 */
function getAllTasks() {
  return fetch('/data/usuarios.json')
    .then(resp => resp.json());
}

/**
 * @typedef User Definición de un usuario
 * @property {number} id Identificador unico del usuario
 * 
 * 
 * @property {string} email Correo electronico del usuario
  */

/**
 * @typedef Task Definición de una tarea de usuario
 * @property {number} id Identificador unico de la tarea
 * @property {number} userId IDentificador del uaurio a quien corresponde la tarea
 * @property {string} title Titulo de la tarea
 * @property {boolean} completed Estado de la tarea si esta completada o no
 */