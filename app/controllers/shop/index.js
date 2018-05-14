import { Shop } from '../../services'
import BaseController from '../base-controller'

class Controller extends BaseController {
  constructor() {
    super(Shop)
  }
}

export default new Controller