'use strict'
import {Router} from 'https://deno.land/x/oak@v6.3.1/mod.ts';
import {v4} from 'https://deno.land/std@0.77.0/uuid/mod.ts';


//status
//1 = ToDo
//2 = Progress
//3 = Done
let list = [
    {id: v4.generate(), description: "Meeting for Kanban Project at 17.50.", title: "Meeting Kanban", status: 3},
    {id: v4.generate(), description: "Study Page 185+186 in Dornbader.", title: "Physics Test!", status: 1 },
    {id: v4.generate(), description: "Mathematics Page 19, Number 3+4.", title: "Homework", status: 2},
];

const router = new Router();

router
.get("/api/list", context => context.response.body = list)
.get("/api/id", context => context.response.body = v4.generate())
.post("/api/list", async context => {
    const newItem = await context.request.body({type: "json"}).value;
    console.log("requestBody: ", newItem);
    list = [
        ...list,
        newItem
    ];
    context.response.status = 200;
})
.delete("/api/delete", async context => {
    const delItem = await context.request.body({type: "json"}).value;
    console.log("Deleting item: " + JSON.stringify(delItem));

    let index = list.map(function(e) { return e.id; }).indexOf(delItem.id);
    if(index !== -1) {
        list.splice(index,1);
        context.response.status = 200;
    }
    else {
        context.response.status = 400;
    }  
});

export const apiRoutes = router.routes();