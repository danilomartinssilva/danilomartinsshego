import Sequelize, { Model } from "sequelize";


class Reinforcement extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      description: Sequelize.TEXT,
      zumbi_id: Sequelize.INTEGER
    }, {
      sequelize,
      tableName: "reinforcements"
    })
  }

}

export default Reinforcement