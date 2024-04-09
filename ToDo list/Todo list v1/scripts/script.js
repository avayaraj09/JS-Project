// section selector
var Header = document.getElementById('Header');
var addTaskBlock = document.getElementById('addTaskBlock');
var TodoList = document.getElementById('TodoList');


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
    TodoList.appendChild(list);

    // return back to read mode i.e. remove write class
    Header.classList.remove('write');
    Title.value = '';
    Desc.value = '';

};

function createTaskList (title, description) {

    let li = document.createElement('li');

    // radio
    let radio = document.createElement('div');
    radio.classList.add('radio');

    // content
    let content = document.createElement('div');
    content.classList.add('content');
        let h3 = document.createElement('h3');
        h3.innerText = title;
        let p = document.createElement('p');
        p.innerText = description;
    content.append(h3, p);

    // action
    let action = document.createElement('div');
    action.classList.add('action');
    action.innerHTML = '<img src="./images/edit.svg" />';
    action.innerHTML += '<img src="./images/delete.svg" />';

    li.append(radio, content, action);

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
