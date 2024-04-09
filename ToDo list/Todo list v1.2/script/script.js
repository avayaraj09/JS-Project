//section selector
var Header = document.getElementById("Header");
var addTaskBlock = document.getElementById("addTaskBlock");
var TodoList = document.getElementById("TodoList");
var EmptyTask = document.getElementById("EmptyTask");
var SearchBtn = document.getElementById("SearchBtn");
var SearchBox = document.getElementById("SearchBox");
var CloseSearch = document.getElementById("closeSearch");
var SearchTxt = document.getElementById("SearchTxt");

//button selector
var Cancel = document.getElementById("Cancel");
var AddTask = document.getElementById("AddTask");
//input selector
var Title = document.getElementById("Title");
var Desc = document.getElementById("Desc");
//Add task to the todolist
AddTask.onclick = function () {
  var title = Title.value;
  var description = Desc.value;
  let list = createTaskList(title, description);
  TodoList.insertAdjacentHTML("beforeend", list);
  Header.classList.remove("write");
  Title.value = "";
  Desc.value = "";
  addTaskBlock.style.display = "flex";

  //remove empty task
  EmptyTask.style.display = "none";
};

TodoList.addEventListener("click", function (e) {
  let target = e.target;
  let dataid = target.getAttribute("data-id");
  console.log(dataid);
  if (dataid == "delete") {
    let task = target.parentElement.parentElement;
    
    //remove animation
    task.classList.add('animate__fadeOutLeft')

    setTimeout(() =>{
        task.remove();

         //remove empty content
    if (TodoList.childElementCount == 0) {
      EmptyTask.style.display = "flex";
    }},900);
  }
  if (dataid == "complete") {
    let task = target.parentElement;
    task.classList.toggle("complete");
  }
});
function createTaskList(title, description) {
  let li = ` <li class="animate__animated animate__fadeIn">
        <div class="radio" data-id="complete"></div>
        <div class="content">
        <h3>${title}</h3>
        <p>${description}</p>
         </div>
        <div class="action">
        <img src="./images/edit.svg" />
        <img class="delete" src="./images/delete.svg" data-id="delete"/>
        </div>
    </li>`;
    
  return li;
}
addTaskBlock.onclick = function () {
  Header.classList.add("write");
};
Cancel.onclick = function () {
  Header.classList.remove("write");
};

SearchBtn.onclick = function () {
  this.style.display = "none";
  SearchBox.style.display = "flex";
};
CloseSearch.onclick = function () {
  SearchBtn.style.display = "block";
  SearchBox.style.display = "none";
};
document.addEventListener("keyup", function (e) {
  console.log(e);
  if (e.key == "Escape") {
    //close search
    SearchBtn.style.display = "block";
    SearchBox.style.display = "none";

    Header.classList.remove("write");
  }
});

//search text keyup event
SearchTxt.addEventListener("keyup", function () {
  let query = this.value.toUpperCase();
  let list = TodoList.getElementsByTagName("li");
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    let title = list[i].getElementsByTagName("h3")[0];
    let desc = list[i].getElementsByTagName("p")[0];
    title = title.innerText.toUpperCase();
    desc = desc.innerText.toUpperCase();

    if (title.includes(query) || desc.includes(query)) {
      list[i].style.display = "flex";
    } else {
      list[i].style.display = "none";
    }
  }
})