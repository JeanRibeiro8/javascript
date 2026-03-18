// 1. select elements scream
const titleInput = document.getElementById("titleInput");
const descInput = document.getElementById("descInput");
const dateInput = document.getElementById("dateInput");

const addButton = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// 2. add button event click
addButton.addEventListener("click", function () {

  // 3. get text typing
  const title = titleInput.value;
  const desc = descInput.value;
  const date = dateInput.value;

  // 4. don't leave empty the text 
  if (title === "") {
    return;
  }

  // 5. create a task
  const taskItem = document.createElement("div");
  taskItem.classList.add("task");

  // 6. create text
  const taskTitle = document.createElement("h3");
  taskTitle.innerText = title;

  // create description element
  const taskDesc = document.createElement("p");
  taskDesc.innerText = desc;

  // create date element
  const taskDate = document.createElement("small");
  taskDate.innerText = date;

  // 7. create buttons
  const doneButton = document.createElement("button");
  doneButton.innerText = "Done";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  // done function 
  doneButton.addEventListener('click', function () {
    // toggle done style instead of just adding line-through
    taskItem.classList.toggle("done");
  });

  // delete function
  deleteButton.addEventListener('click', function () {
    taskItem.remove();
  });

  // 8. put all in container
  taskItem.appendChild(taskTitle);
  taskItem.appendChild(taskDesc);
  taskItem.appendChild(taskDate);
  taskItem.appendChild(doneButton);
  taskItem.appendChild(deleteButton);

  // 9. add this container in taskList
  taskList.appendChild(taskItem);

  // 10. clean input, after add button
  titleInput.value = "";
  descInput.value = "";
  dateInput.value = "";
});