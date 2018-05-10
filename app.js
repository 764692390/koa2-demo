import Koa from 'koa'
import koaRouter from 'koa-router'
import bodyParser from 'koa-bodyparser'
import views from 'koa-views'
import koaStatic from 'koa-static'
import cors from '@koa/cors'

import router from './app/router';
import config from './app/config';
import log from './app/middlewares/log';

const app = new Koa();

app
    .use(log())
    .use(cors())
    .use(bodyParser())
    .use(koaStatic(__dirname + "/app/public"))
    .use(
        views(__dirname + "/app/views", {
            extension: "ejs"
        })
    )
    .use(router.routes(), router.allowedMethods())

app.listen(config.port, () => console.log(`node server start success port=${config.port}`));

export default app;