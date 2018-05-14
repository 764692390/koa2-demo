import Koa from 'koa'
import koaRouter from 'koa-router'
import bodyParser from 'koa-bodyparser'
import views from 'koa-views'
import koaStatic from 'koa-static'
import cors from '@koa/cors'
import KoaSessionredis from 'koa-session-redis'
import Redis from 'ioredis'


const redis=new Redis(config.Redis);

import router from './app/router';
import config from './app/config';
import log from './app/middlewares/log';

const app = new Koa();

/*设置session*/
app.keys = ["some secret hurr"];

app
    .use( async(ctx,next) =>{
        ctx.redis = redis;
        await next();  
    })
    .use(
        KoaSessionredis({
            store: config.SessionRedis
        })
    )
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