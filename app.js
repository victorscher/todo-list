//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
todoList.childNodes[0].remove();
const filterOption = document.querySelector('.filter-todo');

//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', checkOrDelete);
filterOption.addEventListener('change', filterTodo);

//Functions

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  const newTodo = document.createElement('li');
  newTodo.classList.add('todo-item');
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-button');
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-button');
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function checkOrDelete(event) {
  const item = event.target;

  if (item.classList[0] === 'trash-button') {
    const todo = item.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend', () => {
      todo.remove();
    });
  }

  if (item.classList[0] === 'complete-button') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filterTodo(event) {
  const todos = todoList.childNodes;
  todos.forEach(todo => {
    switch (event.target.value) {
      case "all":
        todo.style.display = 'flex';
        break;
      case "completed":
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
          break;
        } else {
          todo.style.display = "none";
          break;
        }
      case "uncompleted":
        if (todo.classList.contains('completed')) {
          todo.style.display = 'none';
          break;
        } else {
          todo.style.display = "flex";
          break;
        }
    }
  })
}
