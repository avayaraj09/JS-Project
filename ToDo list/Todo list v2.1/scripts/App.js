import Config from './Config.js';
import Element from './Element.js';
import Todo from './Todo.js';
import Storage from './Storage.js';

Config.TaskList = Storage.GetTasks();
Todo.RenderTasks(Config.TaskList);


// write mode to add new tsk
Element.addTaskBlock.onclick = function () {
    Element.Header.classList.add('write');

    Element.Title.focus();
};

// Cancel write mode i.e. remove add task block 
Element.Cancel.onclick = function () {
    Element.Header.classList.remove('write');
};

// Add task to the todo-list
Element.AddTask.onclick = function () {
    Todo.AddNewTask ();

    // save updated tasks to storage
    Storage.SetTasks(Config.TaskList);
};


// edit, delete tasks
TodoList.addEventListener('click', function (e) {
    let target = e.target;
    let button = target.getAttribute('data-button');

    // delete task
    if (button == 'delete') {
        let li = target.parentElement.parentElement;
        let TaskId = li.getAttribute('data-task-id');
        
        Todo.DeleteTask(TaskId);

        // save updated tasks to storage
        Storage.SetTasks(Config.TaskList);
    }

    // complete task
    if (button == 'complete') {
        let li = target.parentElement;
        let TaskId = li.getAttribute('data-task-id');

        Todo.CompleteTask (TaskId);

        // save updated tasks to storage
        Storage.SetTasks(Config.TaskList);
    }
});




