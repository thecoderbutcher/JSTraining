// 
let localstorage = window.localStorage;
let listTask = new Array();
let task = {
    id         : 0,
    name       : "",
    status     : true,
    geolocation:{
        latitud : 0,
        longitud: 0
    }
} 
let message = "";

// Agregar tareas
const addTask = (task) => {              
    const container = document.querySelector(".add-task");
    const Task = ` <section class="task" data-id=${task.id}>
                        <input type="checkbox" ${!task.status ? "checked":""} onclick="updateStatus(event);">
                        <span contenteditable="true" onfocusout="updateName(event);" onkeypress="focusoff(event)";>${task.name}</span>
                        <a href="javascript:void(0)" class="material-icons" onclick="deleteTask(event);">delete</a>
                        <a href="javascript:void(0)" class="material-icons" onclick="shareTask(event);">share</a>
                        <a href="javascript:void(0)" class="material-icons" onclick="copyText(event);">content_paste</a>
                    </section> `;
    container.insertAdjacentHTML("afterend", Task);
};
document.querySelector("#add-task").addEventListener("click", (event) => {
    event.preventDefault(); 
    task.name = document.querySelector("#task-name").value;

    if(task.name != ""){ 
        setPosition();
        task.id = (Math.floor(Math.random() * 10001));
        addTask(task);  

        listTask.push({'id':task.id, 'name':task.name, 'status':task.status});  
        localstorage.setItem('tasks', JSON.stringify(listTask));
        document.querySelector("#task-name").value = "";
    }
});

const loadTaks = () =>{ 
    listTask = JSON.parse(localStorage.getItem("tasks")) || [];
    listTask.forEach(element => { addTask(element); });
        
}; window.onload = loadTaks();

// Update status
const updateStatus = (event) =>{
    index = listTask.findIndex(task => task.id == event.target.parentElement.dataset.id);
    listTask[index].status = !listTask[index].status; 
    localstorage.setItem('tasks', JSON.stringify(listTask));
}

// Update name
const updateName = (event) =>{
    index = listTask.findIndex(task => task.id == event.target.parentElement.dataset.id);
    listTask[index].name = event.target.innerText;
    localstorage.setItem('tasks', JSON.stringify(listTask));
}
const focusoff = (event) =>{
    if(event.which == 13) {
        event.target.blur();
    }
}
// Eliminar una tarea
const deleteTask = (event) => {
    let container = document.querySelector(".container");
    container.removeChild(event.target.parentElement);
    index = listTask.findIndex(task => task.id == event.target.parentElement.dataset.id);
 
    listTask.splice(index,1);
    localstorage.setItem('tasks', JSON.stringify(listTask));
} 

/*
 * Change v.1 
 */
// Poner en full screen
document.querySelector("#fullscreem").addEventListener("click", (event) =>{
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        event.target.textContent = "fullscreen_exit";
    } else if (document.exitFullscreen) {
        document.exitFullscreen(); 
        event.target.textContent = "fullscreen"; 
    }
});

// Copiar en cache el contenido de una tarea en cache
function copyText(event){
    let taskText = event.target.parentElement.children[1].textContent
    navigator.clipboard.writeText(taskText);  
    return taskText;
}

// Compartir tarea
function shareTask(event){ 
    if (!("share" in navigator)) {
        alert('Web Share API not supported.');
        return;
    }
    let taskName = this.copyText(event);
    navigator.share({ 
        title: `Mira mi tarea ${taskName}`,
        text: taskName,
        url: window.location
    });
}

/*
 * Change v.2
 */
// Geolocalizacion  

function setPosition(){
    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(
            function(location){
                task.geolocation.latitud  = location.coords.latitude;
                task.geolocation.longitud = location.coords.longitude;
            },
            function(error){
                message = error;
            }
        );
    } 
    else{
        message = "Geolocation API not supported."
    }
}