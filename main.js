// All What I Need Of Variables

const inputTask = document.querySelector(".int-task");
const btnTask = document.querySelector(".btn-task");
const todoList = document.querySelector(".todoList");
const strong = document.querySelector("strong");
const btnClearAll = document.querySelector(".clear-btn");
// Show tasks
function showTasks() {
    let getLocalStorage = localStorage.getItem("New todo");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }

    let newLineTag = ``;
    for (const [i, n] of listArr.entries()) {
        newLineTag += `<li>${n}<span onclick="removeFromStorage(${i})"><i class="fas fa-trash"></i></span></li>`;
    }
    todoList.innerHTML = newLineTag;
    inputTask.value = "";
    strong.textContent = listArr.length;
}
// live key up
inputTask.onkeyup = () => {
    let userData = inputTask.value;
    if (userData.trim() != 0) {
        btnTask.classList.add("active");
    } else {
        btnTask.classList.remove("active");
    }
};
showTasks();
//  onclick in the button
//showTasks();
btnTask.addEventListener("click", function() {
    let userData = inputTask.value;
    let getLocalStorage = localStorage.getItem("New todo");
    if (inputTask.value.trim() != "" && getLocalStorage == null) {
        listArr = [];
    } else if (inputTask.value.trim() != "") {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    window.localStorage.setItem("New todo", JSON.stringify(listArr));
    showTasks();
});

function removeFromStorage(index) {
    let getLocalStorage = localStorage.getItem("New todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    //localStorage.clear();
    window.localStorage.setItem("New todo", JSON.stringify(listArr));
    showTasks();
}

btnClearAll.addEventListener("dblclick", function() {
    window.localStorage.clear();
    showTasks();
});