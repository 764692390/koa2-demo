import koaRouter from 'koa-router';
import { Home, Shop } from '../../services'

const router = koaRouter();
const Homes = new Home;
const Shops = new Shop;


   
router
    .get('/', async(ctx, next) => {
        ctx.state.index = 1;
        ctx.state.bannerList = await Homes.getBanner();
        await ctx.render("index");
    })
    .get('search', async(ctx, next) => {
        ctx.state.index = 2;
        await ctx.render("search");
    })
    .get('cart', async(ctx, next) => {
        ctx.state.index = 3;
        if(ctx.session.user){
            await ctx.render("cart");
        } else{
            ctx.redirect('login');
        }
    })
    .get('my', async(ctx, next) => {
        ctx.state.index = 4;
        if(ctx.session.user){
            await ctx.render("my");
        } else{
            ctx.redirect('login');
        }
    })
    .get('prodDetail/:id',async(ctx, next) => {
        await ctx.render("prod-detail");
    })
    .get('orderList',async(ctx, next) => {
        await ctx.render("order-list");
    })
    .get('login',async(ctx, next) => {
        await ctx.render("login");
    })
    .get('reg',async(ctx, next) => {
        await ctx.render("register");
    })
    .get('shop',async(ctx, next) => {
        const data = await Shops.getData();
        const list = { data:data.goods_list };
       const res = list.data;
        for(let i=0; i <res.length; i++ ) {
            let params = {
                goods_name: res[i].goods_name ,
                event_type: res[i].event_type,
                goods_id: res[i].goods_id,
                price:  res[i].group.price,
                hd_thumb_url: res[i].hd_thumb_url ,
                market_price: res[i].market_price,
                short_name: res[i].short_name,
                thumb_url: res[i].thumb_url
            }
            let d = await Shops.create(params);
            console.log(i);
            console.log(d);

        }

        ctx.body = list
        
    })
export default router;


