export function getTodoFromInput(){
    return {
        action: $("#id-action").value.trim(),
        title: $("#id-title").value.trim(),
        date: $("#id-date").value.trim(),
        description: $("#id-description").value.trim()
    }
}