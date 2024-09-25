
const taskS = document.getElementById("new-task");
const showTask = document.querySelector(".tasks");
let allTask = [];

function addTask() {
    if (taskS.value.trim() == "") {
        alert("You need to enter the task");
    } else {
        allTask = [...allTask, { "task": taskS.value }];
        taskS.value = "";
        showUserTask();
    }
}

function showUserTask() {
    showTask.innerHTML = ""; 
    allTask.map((item, index) => {
        showTask.innerHTML += `
        <tr>
            <td>${item.task}
                <button onclick="editName(${index})">Edit</button>
                <button onclick="deleteRow(${index})">Delete</button>
            </td>
        </tr>`;
    });
}

function deleteRow(index) {
    allTask.splice(index, 1); 
    showUserTask(); 
}

function editName(index) {
    const newTask = prompt("Edit your task:", allTask[index].task);
    if (newTask) {
        allTask[index].task = newTask; 
        showUserTask(); 
    }
}

const addBtn = document.getElementById("add-task-btn");
addBtn.addEventListener("click", addTask); 