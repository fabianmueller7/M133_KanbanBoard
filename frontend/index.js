async function delButton (items) {
   console.log("Delete item: " + items)

   await fetch("/api/delete", {
    method: "DELETE",
    body: JSON.stringify(items),
    headers: {'Content-Type': 'application/json'}
    });
}

function nextButton (items) {
    console.log("fn1")
}

function backButton (items) {
    console.log("fn1")
}

async function createTask(form) {
    console.log(form);
    await fetch("/api/list", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {'Content-Type': 'application/json'}
    });
}