import './style.css';

const listBlock = document.querySelector('.list-block');
const listForm = document.getElementById('list-form');

const removeButton = document.querySelectorAll('.removeButton');

const task = [];

add = (text) => {
  let position;
  if(task.length == 0)
  {
    position = 1;
  } else {
    position = task.length + 1;
  }
  const addTask = {
    description: text,
    completed: false,
    index: position,
  }

  task.push(addTask);
}

remove = () => {

}

update = () => {

}

listForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskInput = document.getElementById('task').value;
  add(taskInput);
});