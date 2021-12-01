import {Application, Router} from 'https://deno.land/x/oak@v6.3.1/mod.ts';

const app = new Application();
const router = new Router();

console.log("http://localhost:8000/");


router
    .get('/', async (context) => {
        context.response.body = await Deno.readTextFile("frontend/index.html");
    })
    .get('/kanban.css', async (context) => {
        context.response.type = 'text/css';
        context.response.body = await Deno.readTextFile("frontend/kanban.css");
    })
    .get('/script.js', async (context) => {
      context.response.type = 'application/javascript';
      context.response.body = await Deno.readTextFile("frontend/index.js");
  })


app.use(router.routes());
app.listen({port: 8000});