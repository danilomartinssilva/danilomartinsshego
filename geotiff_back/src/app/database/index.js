import Sequelize from 'sequelize'
import databaseConfig from '../../config/database'
import Zumbi from '../models/Zumbi'
import User from '../models/User'
import Equipament from '../models/Equipament'
import Reinforcement from '../models/Reinforcement'
const models = [Zumbi, User, Equipament, Reinforcement]
class Database {
  constructor() {
    this.init()
  }
  init() {
    this.connection = new Sequelize(databaseConfig)

    models.map(model => model.init(this.connection))

  }

}

export default new Database();