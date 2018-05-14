import { User } from '../../services'
import BaseController from '../base-controller'
import { res, err } from '../../libs/format';

class Controller extends BaseController {
  constructor() {
    super(User)
  }
  // 退出
  signOut = async ctx => {

  }
  // 注册
  register = async ctx => {
    const params = ctx.request.body
    let result
    
    try {

      if(params.password !== params.passwordConfirm){
         result = {'errno':1020,'errmsg':'两次密码输入不一致'}
         return ;
      }
      console.log(ctx.request.body);
      const data = await this._services.create(params);
      result = res({ data })
    } catch (e) {
      result = err(e)
    }

    ctx.body = result
  }
  // 登录
  signIn = async ctx => {

  }
}

export default new Controller