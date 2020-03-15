import * as Router from 'koa-router';

import dogsRouter from './dogsRouter'
import catsRouter from './catsRouter'

const apiRouter = new Router({ prefix: '/api' })

const nestedRoutes = [dogsRouter, catsRouter]
for (var router of nestedRoutes) {
    apiRouter.use(router.routes(), router.allowedMethods())
}

export default apiRouter;