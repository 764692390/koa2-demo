import { Shop } from '../../models'
import BaseServices from '../base-services'
import request from 'request'

const curl = function (fn) {
  return new Promise(function (resolve, reject) {
    fn(resolve, reject)
  })
}



class Services extends BaseServices {
  constructor() {
    super(Shop)
  }

  findAllData = async where => {
      const data = await this._model.findAll(where)
      return data
  }

  getData = async () => {
    let data = await curl((resolve,reject) => {
      request('https://apiv2.pinduoduo.com/operation/1/groups?opt_type=1&offset=0&size=20', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    }
    );
   
    return data;
  }
}

export default Services
