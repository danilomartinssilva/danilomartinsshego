import User from '../models/User'

class UserController {

  async getById(req, res) {
    const { id } = req.query;
    const user = await User.findOne({
      where: {
        id
      }
    })
    user.password = undefined;
    return res.status(200).json({
      result: user,
      status: true
    })
  }


  async save(req, res) {
    const { email } = req.body
    const userExists = await User.findOne({
      where: {
        email
      }
    })
    if (userExists) {
      return res.json({
        status: false,
        error: "Usuário já cadastrado"
      }).status(200)
    }
    const user = await User.create({
      ...req.body
    })
    return res.json({
      result: user,
      status: true
    }).status(200)
  }

  async update(req, res) {
    const { id } = req.params;
    const update = await User.update({
      ...req.body
    }, {
      where: {
        id
      }
    })

    const user = await User.findOne({
      where: {
        id
      }
    })

    return res.json({
      result: user
    }).status(true)
  }

  async delete(req, res) {
    const { id } = req.params;
    const del = await User.destroy({
      where: {
        id
      }
    })
    return res.json({
      status: true,

    }).status(200)

  }


}

export default new UserController()