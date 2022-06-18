import html from "../ReduxLib/core.js";
import {connect} from "../ReduxLib/store.js"
import todoItem from "./todoItem.js";


function todolist({todos}){
    return html
    `<div class="todo-list ${todos.length === 0 && "hidden"}">
        <div class="todo-list__box">
            ${todos.map((todo, index) => todoItem(todo,index))}
        </div>
     </div>`
}
export default connect()(todolist);