const addBtn = document.getElementById("btn_task")
const taskInput = document.getElementById("taskInput")
const list = document.getElementById("list")

//adding tasks
addBtn.addEventListener("click" , function(){
    const taskText = taskInput.value;
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

//start time
const startTimeStamp = document.createElement("small")
const timeStamp = Date.now();
const dateTime = new Date(timeStamp);
const showTime = dateTime.toLocaleString();


complete.addEventListener("click", function(){
    span.classList.toggle("completed")
    
        alert(`Your  ${taskText} completed at ${showTime}`)
    
    })


//delete button
const delete_btn =  document.createElement("button")
delete_btn.textContent = "❎"
const endTimestamp = document.createElement("small")
const endtime = Date.now();
const enddate = new Date(endtime)
const endShowTime = enddate.toLocaleString();
delete_btn.addEventListener("click", function(){
    alert(`your task deleted at ${endShowTime}`)
    li.remove();
})

//time taken
const timeTaken = document.createElement("button")
timeTaken.textContent = "⏱️"
timeTaken.addEventListener("click", function(){
    const totalTime = endShowTime - showTime;
    alert(`time taken for the taks is ${totalTime}`)
})



//appending
li.appendChild(span);
li.appendChild(complete);
li.appendChild(delete_btn);
li.append(startTimeStamp);
li.append(endTimestamp);
li.append(timeTaken)

list.appendChild(li);

//clearing input
taskInput.value= "";
})


