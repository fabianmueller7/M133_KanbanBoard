'use script';
document.loadListToDo = async () => {
    const response =  await fetch("/api/list/todo");
    return await response.json();
}

document.loadListProgress = async () => {
    const response =  await fetch("/api/list/progress");
    return await response.json();
}

document.loadListDone = async () => {
    const response =  await fetch("/api/list/done");
    return await response.json();
}