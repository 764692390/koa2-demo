import koaRouter from 'koa-router';
import uuid from 'uuid/v1';


const router = koaRouter();

router
    .get('/', async(ctx, next) => {
        ctx.state.index = 1;
        await ctx.render("index");
    })
    .get('search', async(ctx, next) => {
        ctx.state.index = 2;
        await ctx.render("search");
    })
    .get('cart', async(ctx, next) => {
        ctx.state.index = 3;
        await ctx.render("cart");
    })
    .get('my', async(ctx, next) => {
        ctx.state.index = 4;
        await ctx.render("my");
    });



export default router;