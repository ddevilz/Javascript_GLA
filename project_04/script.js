document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  const createTaskItem = (taskText) => {
    const li = document.createElement("li");
    li.className = "task-item";

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    const actionsDiv = document.createElement("div");
    actionsDiv.className = "task-actions";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";
    completeBtn.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", () => {
      const newTaskText = prompt("Edit your task", taskContent.textContent);
      if (newTaskText) {
        taskContent.textContent = newTaskText;
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(taskContent);
    li.appendChild(actionsDiv);

    return li;
  };

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskItem = createTaskItem(taskText);
      taskList.appendChild(taskItem);
      taskInput.value = "";
      taskInput.focus();
    }
  });

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTaskBtn.click();
    }
  });
});
