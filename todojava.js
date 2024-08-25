// Get references to HTML elements
const form = document.getElementById('todo-form');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const todoList = document.getElementById('todo-list');

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get user input values
  const title = titleInput.value;
  const description = descriptionInput.value;

  // Create a new task element
  const task = document.createElement('li');
  task.innerHTML = `
    <strong>${title}</strong>: ${description}
    <button class="delete-btn">Delete</button>
  `;

  // Add event listener to delete button
  const deleteButton = task.querySelector('.delete-btn');
  deleteButton.addEventListener('click', function() {
    task.remove(); // Remove task from the list
  });

  // Add task to the list
  todoList.appendChild(task);

  // Clear input fields
  titleInput.value = '';
  descriptionInput.value = '';
});
