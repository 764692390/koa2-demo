import koaRouter from 'koa-router'
import { user } from '../../../controllers'
const router = koaRouter()

router
  .get('/signOut',user.signOut)
  .post('/register', user.register)
  .post('/signIn', user.signIn)


export default router