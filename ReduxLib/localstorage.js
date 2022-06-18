const KEY_TODOS_LIST = "TODOS";

export default {
    get(){
        return JSON.parse(localStorage.getItem(KEY_TODOS_LIST)) ?? [];
    },
    set(data){
        return localStorage.setItem(KEY_TODOS_LIST, JSON.stringify(data));
    }
}