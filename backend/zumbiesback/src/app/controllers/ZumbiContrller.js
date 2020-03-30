import Zumbi from "../models/Zumbi";
class ZumbiController {
  async list(req, res) {

    const result = await Zumbi.findAll()
    return res.json({
      result,
      status: true
    }).status(200)
  }
  async save(req, res) {

    const zumbi = await Zumbi.create({
      ...req.body
    })
    return res.json({
      result: zumbi,
      status: true

    }).status(200)
  }
}


export default new ZumbiController()