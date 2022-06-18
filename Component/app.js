import html from "../ReduxLib/core.js"
import header from "./header.js";
import todolist from "./todolist.js";
function app(){
    return html
    `<div class="app">
        ${header()}
        ${todolist()}
     </div>
    `
}
export default app;