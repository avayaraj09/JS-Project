import Config from './Config.js';
import Element from './Element.js';

const AddNewTask = () => {
    let title, desc, id;
    title = Element.Title.value;
    desc = Element.Desc.value;

    let Newid = Config.TaskList.length + 1;

    Config.TaskList.push({
        id: Newid,
        title: title,
        description: desc
    });

    RenderTask(Config.TaskList);
};

const DeleteTask = (id) => {

    let index = Config.TaskList.findIndex((task) => {
        if (task.id == id) return task;
    });

    Config.TaskList.splice(index, 1);
    RenderTask (Config.TaskList);
};

const RenderTask = (tasks) => {
    // remove previous tasks from list
    Element.TodoList.innerHTML = '';

    // start rendering
    tasks.forEach(task => {        
        let li = `<li data-task-id="${task.id}">
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

        // render li to todo list (ul);
        Element.TodoList.insertAdjacentHTML('beforeend', li);
    });

    // check if task list is empty
    if (tasks.length <= 0) {
        Element.EmptyTask.style.display = 'flex';
    }else {
        Element.EmptyTask.style.display = 'none';
    }
}

export default {
    RenderTask,
    AddNewTask,
    DeleteTask,
}