const addBtn = document.getElementById("btn_task");
const taskInput = document.getElementById("taskInput");
const list = document.getElementById("list");

// Add tasks
addBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("please add the task");
    return;
  }

 

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  //complete button
  const completeBtn = document.createElement("button");
  completeBtn.addEventListener("click", function(){
    span.classList.toggle("completed");

    //showing on ui -> created timing
    const creatdAt = document.createElement("small");
  const now = new Date();
  creatdAt.textContent = now.toLocaleString();
   li.appendChild(creatdAt);
  })

  //time taken 
  const timeTakenBtn = document.createElement("button");
  timeTakenBtn.addEventListener("click", function(){
    const timeTaken = document.createElement("small");
    const timeTake= new Date() - new Date(li.creatdAt);
    timeTake.textContent= `Time took ${timeTake} ms`;
    li.appendChild(timeTaken)
  })
 
  
  


  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(timeTakenBtn);



  list.appendChild(li);
  taskInput.value = "";
});
