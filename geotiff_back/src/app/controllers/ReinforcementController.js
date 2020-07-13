import Reinforcement from "../models/Reinforcement";

class ReinforcementController {

  async list(req, res) {
    const { zumbi_id } = req.query;
    const reinforcements = await Reinforcement.findAll({
      where: {
        zumbi_id
      }
    })
    return res.json({
      result: reinforcements,
      status: true
    }).status(200)
  }
}

export default new ReinforcementController()