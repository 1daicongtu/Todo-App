import html from "../ReduxLib/core.js";
function todoItem(todo, index){
    return html
    `<div class="todo-item row no-gutters">
        <span class="col-3 todo-item__center action-data action-${todo.action.toLowerCase()}">${todo.action}</span>
        <div class="col-7 title-and-decsription">
            <p class="mb-0">${todo.title}</p>
            <span>${todo.description}</span>
        </div>
        <div class="col-2 todo-item__date">
            <div class="todo-item__date-content">
                <p class="mb-0">${todo.date}</p>
            </div>
            <div class="todo-item__completed" onclick="dispatch('DELETE', ${index})">
                <i class="fas fa-check-circle"></i>
            </div>
        </div>
    </div>`
}

export default todoItem;