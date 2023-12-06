
var todos = [];


var todoForm = document.getElementById("todo-form");
var todoList = document.getElementById("todo-list");


todoForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    var newTodoInput = document.getElementById("new-todo");
    var newTodoValue = newTodoInput.value;

    
    if (newTodoValue.trim() !== "") {
        
        todos.push(newTodoValue);

        
        newTodoInput.value = "";

        
        renderTodos();
    }
});


function renderTodos() {
    
    todoList.innerHTML = "";

   
    var todoTemplate = todos.map(function(todo) {
        var listItem = document.createElement("li");
        listItem.textContent = todo;
        return listItem;
    });

    
    todoTemplate.forEach(function(item) {
        todoList.appendChild(item);
    });
}
