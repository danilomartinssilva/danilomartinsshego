import User from '../models/User'
import jwt from 'jsonwebtoken'
import auth from '../../config/auth'

class LoginController {


  async login(req, res) {
    const { password, email } = req.body
    console.log('Parametros', req.body)
    const user = await User.findOne({
      where: {
        email: email

      }
    })
    if (!user) {
      return res.json(({
        status: false,
        message: 'Usuário não existe'
      })).status(200)
    }
    if (!await user.checkPassword(password)) {
      return res.json({
        status: false,
        message: "Senha não confere"
      }).status(200)
    }
    const { id, name } = user;
    return res.json({
      user: {
        id, name, email
      },
      status: true,
      token: jwt.sign({ id }, auth.secret, {
        expiresIn: auth.expiresIn
      })
    }).status(200)


  }
}

export default new LoginController()