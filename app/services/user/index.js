import { User } from '../../models'
import BaseServices from '../base-services'
import md5 from 'md5'
import uuidv1 from 'uuid/v1';

class Services extends BaseServices {
  constructor() {
    super(User)
  }

  create = async params => {

    let password = md5(params.password);
    params.password = password;

    let uid = await uuidv1();

    params.pic = "/images/head/bear.jpg"

    params.uid = uid;

    params.type = 0

    params.vip = 0

    params.status = 1

    const findPhone = await this.findPhone({phone: params.phone});

    if(findPhone.length > 0 ){
      console.log('用户已存在')
    }

    const data = await this._model.create(params);
    return data 
  }

  findPhone = async params => {
    const data = await this._model.findAll(params);
    return data 
  }
}

export default Services
