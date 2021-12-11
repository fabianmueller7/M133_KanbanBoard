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
.get("/api/list/todo", context => context.response.body = list.filter(function (el){return el.status == 1}))
.get("/api/list/progress", context => context.response.body = list.filter(function (el){return el.status == 2}))
.get("/api/list/done", context => context.response.body = list.filter(function (el){return el.status == 3}))
.get("/api/id", context => context.response.body = v4.generate())
.put("/api/next", async context =>{
    const item = await context.request.body({type: "json"}).value;
    if(item.status < 3){
        let index = list.map(function(e) { return e.id; }).indexOf(item.id);
        if(index !== -1) {
            list[index].status += 1;
            context.response.status = 200;
        }
    }
    else {
        context.response.status = 400;
    }
})
.put("/api/back", async context =>{
    const item = await context.request.body({type: "json"}).value;
    if(item.status > 1){
        let index = list.map(function(e) { return e.id; }).indexOf(item.id);
        if(index !== -1) {
            list[index].status -= 1;
            context.response.status = 200;
        }
    }
    else {
        context.response.status = 400;
    }
})
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