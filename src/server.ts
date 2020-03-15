import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as logger from "koa-logger";
import * as json from "koa-json";
import apiRouter  from "../routes/apiRouter";

const port = 3000;

const app = new Koa();
const router = new Router();

router.get('/*', async (ctx, next) => {
    ctx.body = 'Hello World!';
});

app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());

app.use(router.routes());

app.listen(process.env.port || port, () => {
    console.log("Server running at port " + port);
  });


  export default app;