// Crear tareas
const createTask = (task) => {
    const container = document.querySelector(".add-task");
    const Task = ` <section class="task">
                        <input type="checkbox">
                        <span class="completed">${task}</span>
                        <a href="javascript:void(0)" class="material-icons" onclick="deleteTask(event);">delete</a>
                        <a href="javascript:void(0)" class="material-icons" onclick="shareTask(event);">share</a>
                        <a href="javascript:void(0)" class="material-icons" onclick="copyText(event);">content_paste</a>
                    </section> `;
    container.insertAdjacentHTML("afterend", Task);
    console.log(getPosition());
}
document.querySelector("#add-task").addEventListener("click", (event) => {
    event.preventDefault(); 
    const task = document.querySelector("#task-name");

    if(task.value != ""){ 
        createTask(task.value)
            task.value = ""; 
    }
});

// Eliminar una tarea
const deleteTask = (event) => {
    let container = document.querySelector(".container");
    container.removeChild(event.target.parentElement);
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
    let task = this.copyText(event);
    navigator.share({ 
        title: `Check mi tarea ${task}`,
        text: task,
        url: window.location
    });
}

/*
 * Change v.2
 */
// Geolocalizacion  

function getPosition(){
    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(success);
    } 
}
function success(position){
    return "latitud:" + position.coords.latitude + " longitud:" + position.coords.longitude;
}