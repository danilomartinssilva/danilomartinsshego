import Sequelize, { Model } from 'sequelize'
const bcrypt = require('bcryptjs')

class User extends Model {


  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,

    }, {
      sequelize,
      tableName: "users"
    })
    this.addHook('beforeSave', async (user) => {
      console.log('User', user)
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8)
      }
    })
    return this
  }
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash)
  }
}

export default User