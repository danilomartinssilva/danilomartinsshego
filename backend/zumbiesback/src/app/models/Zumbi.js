import Sequelize, { Model } from 'sequelize'

class Zumbi extends Model {
  static init(sequelize) {
    console.log('O que chega em sequelize no model', sequelize)
    super.init({
      name: Sequelize.STRING,
      avatar: Sequelize.STRING,

    }, {
      sequelize,
      name: "zumbis"
    })
  }

}

export default Zumbi