import Config from "./Config.js";
import Element from "./Element.js";

const AddNewTask = () => {
    let title, desc, id;
    title = Element.Title.value;
    desc = Element.Desc.value;

    // new id
    id = Config.TaskList.length + 1;

    // push element
    Config.TaskList.push({
        id: id,
        title: title,
        description: desc
    });

    // render all tasks
    RenderTasks(Config.TaskList);
    
    // empty input elements
    Element.Title.value = '';
    Element.Desc.value = '';
    Element.Header.classList.toggle('write');
};

const DeleteTask = (id) => {
    let taskIndex = Config.TaskList.findIndex(task => {
        if (task.id == id) return task;
    });

    // remove the selected task
    Config.TaskList.splice(taskIndex, 1);

    // render all tasks
    RenderTasks(Config.TaskList); 
};

// complete tasks
const CompleteTask = (id) => {
    Config.TaskList.forEach(task => {
        if(task.id == id) task.completed = !task.completed;
    });

    // move completed task to the end of list
    Config.TaskList.sort((a, b) => {
        if (b.completed) return -1;
    });

    // render all tasks
    RenderTasks(Config.TaskList); 
};

const RenderTasks = (tasks) => {

    Element.TodoList.innerHTML = '';

    tasks.forEach(task => {
        
        let li = `<li data-task-id="${task.id}" 
                class="${ task.completed ? 'complete' : ''}">
                    <div class="radio" data-button="complete"></div>
                    <div class="content">
                        <h3>${task.title}</h3>
                        <p>${task.description}</p>
                    </div>
                    <div class="action">
                        <img src="./images/edit.svg" data-button="edit" />
                        <img src="./images/delete.svg" data-button="delete" />
                    </div>
                </li>`;

        Element.TodoList.insertAdjacentHTML('beforeend', li);

    });

    // empty content
    if (Config.TaskList.length <= 0) {
        Element.EmptyTask.style.display = 'flex';
    }else {
        Element.EmptyTask.style.display = 'none';
    }


    
}


export default {
    AddNewTask,
    DeleteTask,
    CompleteTask,

    RenderTasks,
}