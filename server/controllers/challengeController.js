const uuid = require('uuid');
const path = require('path');
const { Challenge, Challenge_info } = require('../models/models');
const ApiError = require('../error/ApiError');
const { info } = require('console');

class ChallengeController {
  //создание задания
  async create(req, res, next) {
    try {
      let { name, flag, difficultyId, typeId, description } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const challenge = await Challenge.create({ name, flag, difficultyId, typeId, img: fileName });

      if (description) {
        description = JSON.parse(description);
        description.forEach((i) =>
          Challenge_info.create({
            title: i.title,
            description: i.description,
            challengeId: challenge.id,
          }),
        );
      }

      return res.json(challenge);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  // брать все задания
  async getAll(req, res) {
    let { difficultyId, typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = (page - 1) * limit;
    let challenges;

    if (!difficultyId && !typeId) {
      challenges = await Challenge.findAndCountAll({ limit, offset });
    }

    if (difficultyId && !typeId) {
      challenges = await Challenge.findAndCountAll({
        where: { difficultyId },
        limit,
        offset,
      });
    }

    if (!difficultyId && typeId) {
      challenges = await Challenge.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }

    if (difficultyId && typeId) {
      challenges = await Challenge.findAndCountAll({
        where: { difficultyId, typeId },
        limit,
        offset,
      });
    }

    return res.json(challenges);
  }
//брать задание 
  async getOne(req, res) {
    const { id } = req.params;

    const challenge = await Challenge.findOne({
      where: { id },
      include: [
        {
          model: Challenge_info,
          as: 'description',
        },
      ],
    });

    return res.json(challenge);
  }
}

module.exports = new ChallengeController();
