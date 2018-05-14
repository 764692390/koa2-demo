import koaRouter from 'koa-router';

import home from './home';
import shop from './shop';


const router = koaRouter();

router
  .use('/home', home.routes())
  .use('/shop', shop.routes())
  

export default router;