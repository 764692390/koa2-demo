import Sequelize from 'sequelize'
import { createSchema } from '../../db'
import BaseModel from '../base-model'

const schema = createSchema('shop', {
  goods_name: Sequelize.STRING,
  event_type: Sequelize.INTEGER,
  goods_id: Sequelize.INTEGER,
  price: Sequelize.INTEGER,
  hd_thumb_url: Sequelize.STRING,
  market_price: Sequelize.INTEGER,
  short_name:Sequelize.STRING,
  thumb_url:Sequelize.STRING,
  status: Sequelize.INTEGER,
  sort: Sequelize.INTEGER,
})

class Model extends BaseModel {
  constructor() {
    super(schema)
  }
}

export default Model