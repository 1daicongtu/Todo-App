import storage from "./localstorage.js"
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const init = {
    todos: storage.get(),
    activeForm: false
}
const actions = {
    ADD({todos}, args){
        
        const output = getTodoFromInput();
        if (output.title && output.description){
            todos.push(output);
            storage.set(todos);
        }

    },
    DELETE({todos}, index){
        todos.splice(index, 1);
        storage.set(todos)
    },
    toggleInputForm(state){
        state.activeForm = !state.activeForm;

    }
}
function getTodoFromInput(){
    return {
        action: $("#id-action").value.trim(),
        title: $("#id-title").value.trim(),
        date: $("#id-date").value.trim(),
        description: $("#id-description").value.trim()
    }
}
export default function reducer(state = init, action, args){
    actions[action] && actions[action](state, ...args);
    return state;
}