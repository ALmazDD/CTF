const { Difficulty } = require('../models/models');
const ApiError = require('../error/ApiError');

class DifficultyController {
  async create(req, res) {
    const { name } = req.body;
    const difficulties = await Difficulty.create({ name });
    return res.json(difficulties);
  }
  async getAll(req, res) {
    const difficulties = await Difficulty.findAll();
    return res.json(difficulties);
  }
}

module.exports = new DifficultyController();
