import Koa from 'koa'
import koaRouter from 'koa-router'
import bodyParser from 'koa-bodyparser'
import views from 'koa-views'
import koaStatic from 'koa-static'
import cors from '@koa/cors'
import session from 'koa-generic-session'
import redisStore from 'koa-redis'
import router from './app/router';
import config from './app/config';
import log from './app/middlewares/log';

const app = new Koa();

app.keys = ['keys', 'keykeys'];

app
    .use(log())
    .use(cors())
    .use(bodyParser())
    .use(session({
        key: "LzShop",
        store: redisStore(config.SessionRedis)
    }))
    .use(koaStatic(__dirname + "/app/public"))
    .use(
        views(__dirname + "/app/views", {
            extension: "ejs"
        })
    )
    .use(router.routes(), router.allowedMethods())

app.listen(config.port, () => console.log(`node server start success port=${config.port}`));

export default app;