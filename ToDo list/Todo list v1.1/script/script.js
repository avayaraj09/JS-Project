// section selector
var Header = document.getElementById('Header');
var addTaskBlock = document.getElementById('addTaskBlock');
var TodoList = document.getElementById('TodoList');
var EmptyTask = document.getElementById('EmptyTask');


// button selector
var Cancel = document.getElementById('Cancel');
var AddTask = document.getElementById('AddTask');

// input selector
var Title = document.getElementById('Title');
var Desc = document.getElementById('Desc');


// Add task to the todo-list
AddTask.onclick = function () {
    
    // input value
    var title = Title.value;
    var description = Desc.value;

    // create html dom
    // of todo-list and append to ul (parent node)
    let list = createTaskList (title, description);
    TodoList.insertAdjacentHTML('beforeend', list);

    // return back to read mode i.e. remove write class
    Header.classList.remove('write');
    Title.value = '';
    Desc.value = '';

    //remove empty content
    EmptyTask.style.display = 'none';
    };

TodoList.addEventListener('click', function(e) {
    let target = e.target;
    let dataid = target.getAttribute('data-id');

    if (dataid == 'delete') {
        let task = target.parentElement.parentElement;
        task.remove(); 

        //remove empty content
        if (TodoList.childElementCount == 0) {
            EmptyTask.style.display = 'flex';
        }
    }

    if (dataid == 'complete') {
        let task = target.parentElement;
        task.classList.toggle('complete'); 
    }
});

function createTaskList (title, description) {

    let li = `<li>
            <div class="radio" data-id="complete"></div>
            <div class="content">
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
            <div class="action">
                <img src="./images/edit.svg" />
                <img src="./images/delete.svg" data-id="delete" />
            </div>
        </li>`;

    return li;
}

/**
 * To enter write mode 
*/
addTaskBlock.onclick = function () {
    Header.classList.add('write');
};

// Cancel write mode i.e. remove add task block 
Cancel.onclick = function () {
    Header.classList.remove('write');
};
