import koaRouter from 'koa-router';


const router = koaRouter();

router
  .get('/', async (ctx,next) => {
    await ctx.render("index",{data:[1,2,3,4,5]});
  })
  

export default router;