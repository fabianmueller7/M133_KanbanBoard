async function delButton (items) {
   console.log("Delete item: " + items)

   await fetch("/api/delete", {
    method: "DELETE",
    body: JSON.stringify(items),
    headers: {'Content-Type': 'application/json'}
    });
}

async function nextButton (item) {
    await fetch("/api/next", {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {'Content-Type': 'application/json'}
    });
}

async function backButton (item) {
    await fetch("/api/back", {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {'Content-Type': 'application/json'}
    });
}

async function createTask(form) {
    console.log(form);
    await fetch("/api/list", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {'Content-Type': 'application/json'}
    });
}