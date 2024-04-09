import Config from './Config.js';
import Element from './Element.js';
import Todo from './Todo.js';

Todo.RenderTask (Config.TaskList);

(function () {

      // init write mode 
    // add task block
    Element.addTaskBlock.onclick = function () {
        Element.Header.classList.add('write');
    };    

    // cancel write mode
    Element.Cancel.onclick = function () {
        Element.Header.classList.remove('write');
    };

    // create new task
    Element.AddTask.onclick = function () {
        Todo.AddNewTask();
    };

    // edit, complete, delete tasks
    Element.TodoList.addEventListener('click', function (e) {
        let target = e.target;
        let button = target.getAttribute('data-button');
    
        if (button == 'delete') {
            let TaskLi = target.parentElement.parentElement;
            let taskid = TaskLi.getAttribute('data-task-id');

            Todo.DeleteTask (taskid);
        }
    });


})();

