const addBtn = document.getElementById("btn_task")
const taskinout = document.getElementById("taskInput")
const list = document.getElementById("list")

//adding tasks
addBtn.addEventListener("click" , function(){
    const taskText = taskinout.value;
    if(taskText === ""){
        alert("please add the task")
        return;
    }

//tasks lits
const li = document.createElement("li")
//task TexttaskText
const span = document.createElement("span")
span.textContent = taskText;

//complete button
const complete = document.createElement("button")
complete.textContent = "👍"
complete.addEventListener("click", function(){
    span.classList.toggle("completed")
})

//delete button
const delete_btn =  document.createElement("button")
delete_btn.textContent = "❎"
delete_btn.addEventListener("click", function(){
    li.remove();
})

//appending
li.appendChild(span);
li.appendChild(complete);
li.appendChild(delete_btn);
list.appendChild(li);

//clearing input
taskinout.value= "";
})