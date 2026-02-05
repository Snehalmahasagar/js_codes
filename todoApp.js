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
    alert(`Your ${taskText} taks added to the list!`)

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
    
        alert(`Your  ${taskText} completed at ${showTime}`)
    
    })

//delete button
const delete_btn =  document.createElement("button")
delete_btn.textContent = "❎"

delete_btn.addEventListener("click", function(){
    li.remove();
    alert(`successfully completed the ${taskText} at ${endshowTime}`)
})

const startTimeStamp = document.createElement("small")
const timeStamp = Date.now();
const dateTime = new Date(timeStamp);
const showTime = dateTime.toLocaleString();

startTimeStamp.textContent = `${taskText} created at ${showTime}`
li.append(startTimeStamp);

/*const timeBtn = document.createElement("button")
timeBtn.textContent= showTime;
timeBtn.addEventListener("click" , function(){
    
})*/

//appending
li.appendChild(span);
li.appendChild(complete);
li.appendChild(delete_btn);

list.appendChild(li);

//clearing input
taskinout.value= "";
})

