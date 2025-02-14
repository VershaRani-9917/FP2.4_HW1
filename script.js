const tasks = [
  { id: 1, task: "Task 1", status: "todo" },
  { id: 2, task: "Task 2", status: "completed" },
  { id: 3, task: "Task 3", status: "inProgress" },
  { id: 4, task: "Task 4", status: "todo" },
  { id: 5, task: "Task 5", status: "completed" },
];

const taskListContainer = document.querySelector("#taskList");
const filterRadioButtons = document.getElementsByName("status");

function renderTasks(selectedStatus) {
  const filteredTasks =
    selectedStatus === "all"
      ? tasks
      : tasks.filter((task) => task.status === selectedStatus);

  const taskListHTML = filteredTasks
    .map(
      (task) => `
      <li>
        <strong>ID: </strong>${task.id}<br>
        <strong>Task: </strong>${task.task}<br>
        <strong>Status: </strong>${task.status}<br>
        <hr>
      </li>`
    )
    .join("");

  taskListContainer.innerHTML = taskListHTML;
}

// Initial render (show all tasks)
renderTasks("all");

// Event listener for filtering
filterRadioButtons.forEach((radioBtn) => {
  radioBtn.addEventListener("change", function () {
    renderTasks(this.value);
  });
});
