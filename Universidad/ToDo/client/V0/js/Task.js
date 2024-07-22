const createTask = (task) => {
    const container = document.querySelector(".add-task");
    const Task = ` <section class="task">
                        <input type="checkbox">
                        <span class="completed">${task}</span>
                        <a href="javascript:void(0)" class="material-icons" onclick="deleteTask(event);">delete</a>
                    </section> `;
    container.insertAdjacentHTML("afterend", Task);
}
const deleteTask = (event) => {
    let container = document.querySelector(".container");
    container.removeChild(event.target.parentElement);
} 

document.querySelector("#add-task").addEventListener("click", (event) => {
        event.preventDefault(); 
        const task = document.querySelector("#task-name");

        if(task.value != ""){ 
            createTask(task.value)
            task.value = ""; 
        }
    }
);