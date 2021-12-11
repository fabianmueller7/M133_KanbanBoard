'use script';
document.loadList = async () => {
    const response =  await fetch("/api/list");
    return await response.json();
}

document.next = async () => {
    console.log("Next!")
} 

document.back = async () => {
    console.log("back!")
}

document.delete = async () => {
    console.log("Delete!")
}

document.createTask = async () => {
    console.log("CreateTask!")
}