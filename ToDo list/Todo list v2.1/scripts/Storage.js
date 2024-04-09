const TaskStorage = window.localStorage;

const GetTasks = () => {
    let tasks = TaskStorage.getItem('task-list');
    if (tasks == null) return [];
    else return JSON.parse(tasks);
};

const SetTasks = (tasks) => {
    TaskStorage.setItem('task-list', JSON.stringify(tasks));
};


export default {
    GetTasks,
    SetTasks,
}