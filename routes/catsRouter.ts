import * as Router from 'koa-router';
import {CatsController} from '../controllers/catsController'
const catsRouter = new Router({ prefix: '/cats' });

catsRouter.get('/', async (ctx, next) => {
 // ctx.body = 'Cats be here'
 var catsController = new CatsController();
 let catsData = await catsController.getCats(); 
 ctx.body = catsData
  await next()
});

export default catsRouter;