import Equipament from "../models/Equipament";


class EquipamentController {

  async list(req, res) {
    const { zumbi_id } = req.query;
    const equipaments = await Equipament.findAll({
      where: {
        zumbi_id
      }
    })
    return res.json({
      result: equipaments,
      status: true
    }).status(200)
  }

  async create(req, res) {
    try {
      const equipament = await Equipament.create({
        ...req.body
      })
      return res.json({
        status: true,
        result: equipament
      }).status(200)
    }
    catch (err) {
      return res.json({
        message: JSON.stringify(err),
        status: false
      })
    }

  }

}

export default new EquipamentController()