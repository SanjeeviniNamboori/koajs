import * as Router from 'koa-router';

const catsRouter = new Router({ prefix: '/cats' });

catsRouter.get('/', async (ctx, next) => {
  ctx.body = 'Cats be here'
});

export default catsRouter;