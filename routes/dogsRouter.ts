import * as Router from 'koa-router';

const dogsRouter = new Router({ prefix: '/dogs' });

dogsRouter.get('/', async (ctx, next) => {
  ctx.body = 'Dogs be here'
});

module.exports= dogsRouter;