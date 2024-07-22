let mainContainer = document.querySelector(".container");
let localstorage  = window.localStorage;
let listTask      = new Array();
let message       = "";
let task          = {
    id         : 0,
    name       : "",
    status     : true,
    geolocation:{
        latitud : 0,
        longitud: 0
    }
} 
// Delegacion de eventos
mainContainer.addEventListener("click", (event)=>{
    if(event.target){
        if(event.target.id == "task-form-button") initTask(event);
        if(event.target.id == "task-fullscreem") fullscreem(event);
        if(event.target.id == "theme-switch") themeSwitch(event);
        if(event.target.className == "checkbox material-icons"){checkBox(event); updateStatus(event)};
        if(event.target.className == "delete material-icons") deleteTask(event);
        if(event.target.className == "share material-icons") shareTask(event);
        if(event.target.className == "copyText material-icons") copyText(event);
    }
});

// Inicializar tareas
const initTask = (event) =>{
    event.preventDefault(); 
    task.name = document.querySelector("#task-form-input-name").value;

    if(task.name != ""){ 
        setPosition();
        task.id = (Math.floor(Math.random() * 10001));
        addTask(task);  

        listTask.push({'id':task.id, 'name':task.name, 'status':task.status});  
        localstorage.setItem('tasks', JSON.stringify(listTask));
        document.querySelector("#task-form-input-name").value = "";
    }
}

// Agregar tareas
const addTask = (task) => {              
    const container = document.querySelector(".task-add");
    const Task = ` <section class="task-item" data-id=${task.id}>
                        <span class="checkbox material-icons" data-status=${!task.status ? "true":"false"}>${!task.status ? "check_box":"check_box_outline_blank"}</span>
                        <input type="checkbox" ${!task.status ? "checked":""} onchange="updateStatus(event);">
                        <span class="task-text" contenteditable="true" onfocusout="updateName(event);" onkeypress="focusoff(event)";>${task.name}</span>
                        <button class="delete material-icons">delete</button>
                        <button class="share material-icons">share</button>
                        <button class="copyText material-icons">content_paste</button>
                    </section> `;
    container.insertAdjacentHTML("afterend", Task);
};

// Cargar tareas del storage
const loadTaks = () =>{ 
    listTask = JSON.parse(localStorage.getItem("tasks")) || [];
    listTask.forEach(element => { addTask(element); });
    console.log(localStorage.getItem("theme"));
        
}; window.onload = loadTaks();

// Actualizar estado de tareas
const updateStatus = (event) =>{
    index = listTask.findIndex(task => task.id == event.target.parentElement.dataset.id);
    listTask[index].status = !listTask[index].status; 
    localstorage.setItem('tasks', JSON.stringify(listTask));
}

// Actualizar nombre de tarea
const updateName = (event) =>{
    index = listTask.findIndex(task => task.id == event.target.parentElement.dataset.id);
    listTask[index].name = event.target.innerText;
    localstorage.setItem('tasks', JSON.stringify(listTask));
}
const focusoff = (event) => event.which == 13 ? event.target.blur() : null;

// Eliminar una tarea
const deleteTask = (event) => {
    let container = document.querySelector("main");
    container.removeChild(event.target.parentElement);
    index = listTask.findIndex(task => task.id == event.target.parentElement.dataset.id);
 
    listTask.splice(index,1);
    localstorage.setItem('tasks', JSON.stringify(listTask));
} 

// Poner en full screen
const fullscreem = (event) => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        event.target.textContent = "fullscreen_exit";
    } else if (document.exitFullscreen) {
        document.exitFullscreen(); 
        event.target.textContent = "fullscreen"; 
    }
}

// Simulando chackbox
function checkBox(event){
    if(event.target.dataset.status == "false"){
        event.target.textContent = "check_box";
        event.target.dataset.status = "true";
        event.target.parentElement.querySelector("input[type=checkbox]").checked = true;
    }
    else{
        event.target.textContent = "check_box_outline_blank";
        event.target.dataset.status = "false";
        event.target.parentElement.querySelector("input[type=checkbox]").checked = false;
    }
}

// Copiar en cache el contenido de una tarea en cache
function copyText(event){
    let taskText = event.target.parentElement.children[2].textContent
    console.log(taskText)
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

// Geolocalizacion  
function setPosition(){
    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(
            function(location){
                task.geolocation.latitud  = location.coords.latitude;
                task.geolocation.longitud = location.coords.longitude;
            },
            function(error){message = error;}
        );
    } 
    else{message = "Geolocation API not supported."}
}

// Color theme schema selector
const themeSwitch = (event)=>{
    if(event.target.textContent == "toggle_on"){
        mainContainer.className = "container light";
        event.target.textContent = "toggle_off"; 
    }
    else{
        mainContainer.className = "container dark";
        event.target.textContent = "toggle_on";
    }
    localstorage.setItem('theme', mainContainer.className);
    
}

if(window.matchMedia){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        mainContainer.className = "container dark";
        document.querySelector("#theme-switch").textContent = "toggle_on"
    }
    else{
        mainContainer.className = "container light";
        document.querySelector("#theme-switch").textContent = "toggle_off"
    } 
} 
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if(e.matches){
        mainContainer.className = "container dark";  
        document.querySelector("#theme-switch").textContent = "toggle_on"
    }
    else{
        mainContainer.className = "container light";  
        document.querySelector("#theme-switch").textContent = "toggle_off"
    }  
});