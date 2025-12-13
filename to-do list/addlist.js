// 1. select elements scream
const input = document.getElementById("taskInput");
const addButton = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// 2. add button event click
addButton.addEventListener("click", function () {

  // 3. get text typing
  const text = input.value;

  // 4. don't leave empty the text 
  if (text === "") {
    return;
  }

  // 5. create a task
  const taskItem = document.createElement("div");

  // 6. create text
  const taskText = document.createElement("span");
  taskText.innerText = text;

  // 7. create buttons
  const doneButton = document.createElement("button");
  doneButton.innerText = "Done";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  // done fuction 
  doneButton.addEventListener('click', function(){
taskText.style.textDecoration = 'line-through'
  });

  //delete function
  deleteButton.addEventListener('click', function(){
taskItem.remove()
  });

  // 8. put all in container
  taskItem.appendChild(taskText);
  taskItem.appendChild(doneButton);
  taskItem.appendChild(deleteButton);

  // 9. add this container in taskList
  taskList.appendChild(taskItem);

  // 10. clean input, after add button
  input.value = "";
});
