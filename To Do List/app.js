









// // 1. Select DOM Elements
// const taskInput = document.getElementById('taskInput');
// const addBtn = document.getElementById('addBtn');
// const taskList = document.getElementById('taskList');
// const clearAllBtn = document.getElementById('clearAll');

// // 2. Task State (Array to store tasks)
// let tasks = [];

// // 3. Color mapping to match the UI design
// const colors = ['blue', 'yellow', 'teal', 'pink'];

// // 4. Function to render tasks to the UI
// function renderTasks() {
//     taskList.innerHTML = ''; // Clear current list

//     tasks.forEach((task, index) => {
//         const colorClass = colors[index % colors.length]; // Cycles through the 4 colors
        
//         const li = document.createElement('li');
//         li.className = `task-item ${colorClass}`;
        
//         li.innerHTML = `
//             <input type="checkbox">
//             <span>${task}</span>
//             <div class="actions">
//                 <button onclick="deleteTask(${index})"><i class="fas fa-trash"></i></button>
//                 <button onclick="editTask(${index})"><i class="fas fa-edit"></i></button>
//             </div>
//         `;
//         taskList.appendChild(li);
//     });
// }

// // 5. Add Task logic
// function addTask() {
//     const text = taskInput.value.trim();
//     if (text !== "") {
//         tasks.push(text);
//         taskInput.value = ''; // Reset input
//         renderTasks();
//     } else {
//         alert("Please enter a task!");
//     }
// }

// // 6. Delete Task logic
// function deleteTask(index) {
//     tasks.splice(index, 1);
//     renderTasks();
// }

// // 7. Edit Task logic
// function editTask(index) {
//     const newText = prompt("Edit your task:", tasks[index]);
//     if (newText !== null && newText.trim() !== "") {
//         tasks[index] = newText.trim();
//         renderTasks();
//     }
// }

// // 8. Event Listeners
// addBtn.addEventListener('click', addTask);

// // Allow pressing "Enter" to add task
// taskInput.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') addTask();
// });

// // Clear all tasks
// clearAllBtn.addEventListener('click', () => {
//     if(confirm("Are you sure you want to clear all tasks?")) {
//         tasks = [];
//         renderTasks();
//     }
// });


let listItem = document.getElementsByClassName("list")[0];

let input = document.getElementById("inp");

let number = 0;

let arr=[];


let add = () => {
    arr.push(input.value);
    let inc = number++;
    listItem.innerHTML += `<li>${input.value}</li> <button id="${inc}" onclick="complete(${inc})">Complete</button> <button onclick="del()">Delete</button>`;
    input.value = null;
    console.log(input); 
}

let complete = (num) => {

    let ab = document.getElementById(num);
    console.log(ab.classList);
    ab.classList.add(apniClass);
}

let del = () => {
    
}