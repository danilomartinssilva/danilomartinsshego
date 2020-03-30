import Sequelize, { Model } from "sequelize";


class Equipament extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      description: Sequelize.TEXT,
      zumbi_id: Sequelize.INTEGER
    }, {
      sequelize,
      tableName: "equipaments"
    })
  }

}

export default Equipament