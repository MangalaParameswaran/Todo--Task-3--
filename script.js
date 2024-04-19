let taskInput=document.getElementById("taskInput")
let taskList=document.getElementById("taskList")
let tasks=JSON.parse(localStorage.getItem("tasks")) || [];

function addTask(){
    let taskText=taskInput.value.trim()
    if(taskText === '') return

    let task={text:taskText}
    tasks.push(task)

    localStorage.setItem("tasks", JSON.stringify(tasks))

    taskInput.value=''
    displayTask()
}

function deleteTask(index){
    tasks.splice(index,1);

    localStorage.setItem("tasks", JSON.stringify(tasks))

    displayTask();
}

function editTask(index){
    let newTaskText=prompt("Edit Task", tasks[index].text)

    if (newTaskText !== null) {
        tasks[index].text= newTaskText
        localStorage.setItem("tasks", JSON.stringify(tasks))
        displayTask()
    }
}

function displayTask(){
    taskList.innerHTML=''

    tasks.forEach((e,i) => {
        let li=document.createElement('li')
        li.innerHTML=`
        <span>${e.text}</span>
        <hr/>
        <button onClick='editTask(${i})' class='edit-button' >Edit</button>
        <button onClick='deleteTask(${i})' class='delete-button' >Delete</button>
        `
        taskList.appendChild(li)
    });
}