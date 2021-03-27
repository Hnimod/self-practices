const addBtn = document.querySelector('.add');
const addInput = document.querySelector('.add-input');
const addedTasks = document.querySelector('.added-tasks');

function addTask(e) {
  if (addInput.value) {
    e.preventDefault();
    const task = `
    <div class="task-container" id="${Math.random().toFixed(5)}">
        <h2 class="task-name" >${addInput.value}</h2>
        <button class="mark-complete">Mark complete</button>
    </div>
  `;
    addedTasks.insertAdjacentHTML('afterbegin', task);
  }
}

function markComplete(e) {
  e.preventDefault();
  if (e.target.classList.contains('mark-complete')) {
    e.target.parentElement.remove();
  }
}

addBtn.addEventListener('click', addTask);
addedTasks.addEventListener('click', markComplete);
